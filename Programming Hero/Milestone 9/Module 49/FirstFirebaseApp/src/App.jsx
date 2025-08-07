import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
