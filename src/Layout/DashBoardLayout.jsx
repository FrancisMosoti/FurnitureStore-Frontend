import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../Sections/Dashboard/SideMenu";
import TopNav from "../Sections/Dashboard/TopNav";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen w-full flex-col flex md:flex-row">
      <SideMenu />

      <div className="flex-1">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
