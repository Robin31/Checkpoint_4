import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarCard/Navbar";
import Footer from "../components/Footer/Footer";

function UserLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
