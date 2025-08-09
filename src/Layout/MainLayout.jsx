import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Sections/Navbar";

import Footer from "../Sections/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;
