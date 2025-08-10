import React, { useState } from "react";
import { NavLink } from "react-router";
import { MdDashboardCustomize } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

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
  const [hideName, setHideName] = useState(false);

  const toggle = () => {
    setHideName((prevState) => !prevState); // safe toggle based on previous value
  };
  return (
    <div
      className={`bg-[#365A4C]/70 shadow-md ${
        hideName ? "w-64" : "w-20"
      } h-full max-h-screen top-0 left-0 relative transition-all duration-500 ease-in-out`}
    >
      <div
        className="absolute cursor-pointer bg-white text-center p-2 rounded-full -right-6 top-1/2 border-2 border-[#365A4C] transition-all duration-500"
        onClick={toggle}
      >
        {hideName ? (
          <FaArrowLeft className="text-3xl text-[#365A4C]" />
        ) : (
          <FaArrowRight className="text-3xl text-[#365A4C]" />
        )}
      </div>
      <div className="flex items-center justify-center h-16 ">
        {hideName && (
          <h1 className=" font-bold text-5xl text-white mt-18">
            Furni <span className="font-extrabold text-4xl">.</span>
          </h1>
        )}
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
              <span
                className={`text-lg transition-all duration-500 ${
                  hideName ? "opacity-100 ml-2" : "opacity-0 w-0 ml-0"
                }`}
              >
                {item.name}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
