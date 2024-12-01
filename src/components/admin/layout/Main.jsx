import React from "react";
import Header from "./Header";
import Link from "next/link";
import Navlist from "./Navlist";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="drawer lg:drawer-open w-full">
        <input id="admin-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full">
          {children}
          </div>
        <Navlist/>
      </div>
    </div>
  );
};

export default Main;
