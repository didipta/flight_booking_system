"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navlist = () => {
  const { user, loading } = useSelector((state) => state.auth);
  return (
    <>
      {user !== null && (
        <div className="drawer-side">
          <label
            htmlFor="admin-menu"
            aria-label="close sidebar"
            className="drawer-overlay w-full"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <Link href={"/admin-dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/flight-list"}>Flight List</Link>
            </li>
            <li>
              <Link href={"/booking-list"}>Booking List</Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navlist;
