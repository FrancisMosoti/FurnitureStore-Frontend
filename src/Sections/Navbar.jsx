import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-[#365A4C] flex justify-between items-center">
      <div className="container mx-auto">
        <h1 className="text-white font-bold ml-10 text-2xl ">
          Furni <span className="font-extrabold text-2xl">.</span>
        </h1>
      </div>
      <div className="flex my-3">
        {navlinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            end={link.path === "/"}
            className={({ isActive }) =>
              `group relative text-white font-semibold hover:text-gray-300 py-6 px-3 mx-3` +
              (isActive ? " text-[#FEC020]" : "")
            }
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
      </div>
    </nav>
  );
};

export default Navbar;
