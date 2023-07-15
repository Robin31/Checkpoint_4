import React from "react";
import { Outlet } from "react-router-dom";
import Connect from "../components/Connect";

function UserLayout() {
  return (
    <div>
      <Connect />
      <Outlet />
      Coucou
    </div>
  );
}

export default UserLayout;
