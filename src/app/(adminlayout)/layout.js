import localFont from "next/font/local";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/service/redux/provider";
import Main from "@/components/admin/layout/Main";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {" "}
          <Main>{children}</Main>
        </Providers>

        <Toaster />
      </body>
    </html>
  );
}