import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // changed to react-router-dom
import { MdDashboardCustomize } from "react-icons/md";
import { IoSettingsOutline, IoPersonCircleSharp } from "react-icons/io5";
import { FaShopify, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";

const sideMenuItems = [
  { name: "Dashboard", icon: <MdDashboardCustomize />, path: "/dashboard" },
  {
    name: "Clients",
    icon: <IoPersonCircleSharp />,
    path: "/dashboard/clients",
  },
  { name: "Orders", icon: <FaShopify />, path: "/dashboard/orders" },
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
    path: "/dashboard/settings",
  },
  { name: "Logout", icon: <GrLogout />, path: "/logout" },
];

const SideMenu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [expand, setExpand] = useState(true); // desktop expand/collapse

  const toggleExpand = () => setExpand((prev) => !prev);
  const toggleMobile = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 z-40 h-full min-h-screen
          bg-[#365A4C]/70 shadow-md transition-all duration-500 ease-in-out
          ${expand ? "w-64" : "w-20"}
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${className}
        `}
      >
        {/* Collapse/Expand toggle (desktop only) */}
        <div
          className="absolute hidden md:flex cursor-pointer bg-white text-center p-2 rounded-full -right-6 top-1/2 border-2 border-[#365A4C] transition-all duration-500"
          onClick={toggleExpand}
        >
          {expand ? (
            <FaArrowLeft className="text-2xl text-[#365A4C]" />
          ) : (
            <FaArrowRight className="text-2xl text-[#365A4C]" />
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center h-16">
          {expand && (
            <h1 className="font-bold text-3xl text-white">
              Furni <span className="font-extrabold text-2xl">.</span>
            </h1>
          )}
        </div>

        {/* Nav Items */}
        <div className="flex flex-col mt-6">
          {sideMenuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // close on mobile
              className={({ isActive }) =>
                `flex items-center p-4 text-white hover:bg-[#365A4C]/90 transition-colors duration-200 ${
                  isActive ? "bg-[#365A4C]/90" : ""
                }`
              }
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{item.icon}</span>
                <span
                  className={`text-base transition-all duration-500 ${
                    expand ? "opacity-100 ml-2" : "opacity-0 w-0 ml-0"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile toggle button (hamburger) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#365A4C] text-white p-2 rounded-lg"
        onClick={toggleMobile}
      >
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
    </>
  );
};

export default SideMenu;
