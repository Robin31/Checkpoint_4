import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SidebarCard/Sidebar";
import "./AdminLayout.scss";

function AdminLayout() {
  return (
    <div className="admin-container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
