"use client";
import { Authuser } from "@/service/hook/userdata";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispach = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    Authuser(dispach, user, loading);
  }, []);
  return (
    <div className="navbar bg-base-100 container">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm input-bordered w-24 md:w-auto"
          />
        </div>
        {user === null ? (
          <>
            <a href="/login" className="btn btn-primary">
              Sign In
            </a>
          </>
        ) : (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    src="/assets/images/user.png"
                    width={30}
                    height={30}
                    alt=" "
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    @{user?.username}
                    <span className="badge">profile</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}

        <label
          htmlFor="admin-menu"
          className=" drawer-button lg:hidden"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
