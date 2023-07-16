import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Connect from "../components/Connect";

function UserLayout() {
  return (
    <div>
      <Navbar />
      {/* <Connect /> */}
      <Outlet />
    </div>
  );
}

export default UserLayout;
