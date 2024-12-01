import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  if (!token) {
    // Redirect to login if no token is found
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const pathname = request.nextUrl.pathname;

  // Define role-based access
  const adminRoutes = [
    "/admin-dashboard",
    "/flight-create",
    "/flight-update",
    "/flight-list",
    "/booking-list",
  ];
  const userRoutes = ["/user", "/user-dashboard", "/profile"];

  if (
    role === "ADMIN" &&
    !adminRoutes.some((route) => pathname.startsWith(route))
  ) {
    // Admin is trying to access a non-admin route
    return NextResponse.redirect(new URL("/admin/", request.url));
  }

  if (
    role === "USER" &&
    !userRoutes.some((route) => pathname.startsWith(route))
  ) {
    // User is trying to access a non-user route
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access if the role matches the route
  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: [
    "/admin-dashboard",
    "/flight-create",
    "/flight-update",
    "/flight-list",
    "/booking-list",
    "/profile",
  ], // Apply to admin and user routes
};
