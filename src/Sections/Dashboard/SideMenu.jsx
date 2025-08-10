import React from "react";
import { NavLink } from "react-router";
import { MdDashboardCustomize } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { IoPersonCircleSharp } from "react-icons/io5";

const sideMenuItems = [
  {
    name: "Dashboard",
    icon: <MdDashboardCustomize />, // Example icon, replace with actual icon component
    path: "/dashboard",
  },
  {
    name: "Clients",
    icon: <IoPersonCircleSharp />, // Example icon, replace with actual icon component
    path: "/dashboard/clients",
  },

  {
    name: "Orders",
    icon: <FaShopify />, // Example icon, replace with actual icon component
    path: "/dashboard/orders",
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline />, // Example icon, replace with actual icon component

    path: "/dashboard/settings",
  },
  {
    name: "Logout",
    icon: <GrLogout />, // Example icon, replace with actual icon component
    path: "/logout",
  },
];

const SideMenu = () => {
  return (
    <div className="bg-[#365A4C]/70 shadow-md w-64 h-full max-h-screen top-0 left-0">
      <div className="flex items-center justify-center h-16 ">
        <h1 className=" font-bold text-5xl text-white mt-18">
          Furni <span className="font-extrabold text-4xl">.</span>
        </h1>
      </div>
      <div className="flex flex-col mt-18">
        {sideMenuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-4 text-white hover:bg-[#365A4C]/90 transition-colors duration-200 ${
                isActive ? "bg-[#365A4C]/90" : ""
              }`
            }
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-lg">{item.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
