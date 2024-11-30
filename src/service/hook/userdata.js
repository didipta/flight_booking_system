import { hasCookie, setCookie } from "cookies-next";
import { logout, setUser } from "../redux/features/auth/authSlice";
import Api from "../axios/baseInterceptors";

// Authuser function is used to check if the user is logged in or not
export const Authuser = (dispach, user, loading) => {
  if (user === null && !loading) {
    if (hasCookie("token")) {
      Api.get("auth/me")
        .then((res) => {
          dispach(setUser(res?.data?.data));
          setCookie("role", res?.data?.data?.role, {
            maxAge: 60 * 60 * 24,}  
          );
        })
        .catch((err) => {
          if (err.response.status === 401) {
            dispach(logout(null));
            if (hasCookie("token") && hasCookie("role")) {
              document.cookie =
                "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              document.cookie ="role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
          }
        });
    }
  }
};
