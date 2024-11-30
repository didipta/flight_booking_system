"use client";
import { Authuser } from "@/service/hook/userdata";
import { logout } from "@/service/redux/features/auth/authSlice";
import { hasCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispach = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);


  useEffect(() => {
    Authuser(dispach, user, loading);
  }, []);
  return (
    <div className="navbar bg-base-100 container m-auto">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Flight Booking
        </Link>
      </div>

      <div className="navbar-end">
        {user === null ? (
          <>
            <Link
              href={"/login"}
              className=" btn text-white border-0 bg-yellow-500 hover:bg-yellow-600"
            >
              Sign In
            </Link>
          </>
        ) : (
          <>
            <Link
              href={"/profile"}
              className=" rounded-full mx-5 flex items-center gap-2"
            >
              <Image src="/assets/images/user.png" width={30} height={30} alt=" " />@
              {user?.username}
            </Link>
            <button
              onClick={() => {
                dispach(logout(null));
                if (hasCookie("token") && hasCookie("role")) {
                  document.cookie =
                    "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                  document.cookie =
                    "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }
              }}
              className=" btn text-white border-0 bg-yellow-500 hover:bg-yellow-600"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
