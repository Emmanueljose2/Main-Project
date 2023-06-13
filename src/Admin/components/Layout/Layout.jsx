import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/topNav";
import Routing from "../Routing/Routing";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main_layout">
        <TopNav />
        <div className="Content">
          <Routing />
        </div>
      </div>
    </div>
  );
}
