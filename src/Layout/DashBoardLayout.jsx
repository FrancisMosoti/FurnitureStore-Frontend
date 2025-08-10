import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../Sections/Dashboard/SideMenu";
import TopNav from "../Sections/Dashboard/TopNav";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen max-w-screen flex flex-row">
      <div>
        <SideMenu />
      </div>
      <div className="flex-1">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
