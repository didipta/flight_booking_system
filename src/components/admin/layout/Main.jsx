import React from "react";
import Header from "./Header";
import Link from "next/link";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="drawer lg:drawer-open w-full">
        <input id="admin-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">{children}</div>
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
              <a>Flight List</a>
            </li>
            <li>
              <a>Booking List</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
