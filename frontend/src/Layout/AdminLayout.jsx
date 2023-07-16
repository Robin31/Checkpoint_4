import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarCard/Navbar";
// import Connect from "../components/Connect";

function AdminLayout() {
  return (
    <div>
      <Navbar />
      {/* <Connect /> */}
      <Outlet />
    </div>
  );
}

export default AdminLayout;
