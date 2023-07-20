import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SidebarCard/Sidebar";

function AdminLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
