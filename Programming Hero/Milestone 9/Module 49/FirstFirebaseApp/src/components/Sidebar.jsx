import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/about">About</Link>
      <Link to="/education">Education</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/project">Project</Link>
    </div>
  );
}

export default Sidebar;
