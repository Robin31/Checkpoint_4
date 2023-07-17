import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarCard/Navbar";

function UserLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default UserLayout;
