import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 container m-auto">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Flight Booking</a>
      </div>
      
      <div className="navbar-end">
        <a className=" btn text-white border-0 bg-yellow-500 hover:bg-yellow-600">Sign In</a>
      </div>
    </div>
  );
};

export default Header;
