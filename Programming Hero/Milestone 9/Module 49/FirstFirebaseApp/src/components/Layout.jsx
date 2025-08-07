import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="grid grid-cols-4 bg-slate-950 text-white min-h-screen items-center  p-6 shadow-lg">
      <Sidebar />
      <div className="flex items-center justify-center h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
