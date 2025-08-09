import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "../Components/Cart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: <FiShoppingCart />, path: "/cart" },
  ];
  return (
    <nav className="bg-[#365A4C] flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <h1 className="text-white font-bold text-2xl">
          Furni <span className="font-extrabold text-2xl">.</span>
        </h1>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex my-3 md:justify-center md:items-center">
        {navlinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            end={link.path === "/"}
            className={({ isActive }) =>
              `group relative text-white font-semibold hover:text-gray-300 py-6 px-3 mx-3` +
              (isActive ? " text-[#FEC020]" : "") +
              (link.name === "Login" || link.path === "/cart"
                ? " hidden md:hidden"
                : "")
            }
          >
            {({ isActive }) => (
              <span className="relative">
                {link.name}
                <span
                  className={`absolute left-0 right-0 -bottom-2 h-0.5 bg-[#FEC020] transition-transform duration-300 origin-left ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ borderRadius: "2px" }}
                />
              </span>
            )}
          </NavLink>
        ))}
        <div className="flex items-center space-x-4 ml-6 gap-4 mr-4">
          <NavLink
            to="/login"
            className="text-white font-semibold hover:text-gray-300 flex items-center mr-2 text-xl"
          >
            <FaArrowRightFromBracket />
          </NavLink>
          <Cart />
        </div>
      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <IoClose /> : <CiMenuFries />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-[#365A4C] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-10`}
      >
        <div className="flex flex-col items-start mt-20 ml-8 space-y-8">
          {navlinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.name}
              end={link.path === "/"}
              className={({ isActive }) =>
                `group relative text-white font-semibold text-xl hover:text-gray-300` +
                (isActive ? " text-[#FEC020]" : "") +
                (link.path === "/cart" ? " hidden" : "")
              }
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.name}
                  <span
                    className={
                      "absolute left-0 right-0 -bottom-2 h-0.5 bg-[#FEC020] transition-transform duration-300 origin-left " +
                      (isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100")
                    }
                    style={{ borderRadius: "2px" }}
                  />
                </span>
              )}
            </NavLink>
          ))}
          <Cart />
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-0 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
