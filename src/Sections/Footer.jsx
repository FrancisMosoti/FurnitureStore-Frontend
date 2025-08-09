import React from "react";
import { NavLink } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook />, url: "https://www.facebook.com" },
  { icon: <FaTwitter />, url: "https://www.twitter.com" },
  { icon: <FaInstagram />, url: "https://www.instagram.com" },
  //   { icon: <FaLinkedin />, url: "https://www.linkedin.com" },
  { icon: <FaTiktok />, url: "https://www.tiktok.com" },
];

const quickLinks = [
  { name: "Home", path: "/" },

  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 ">
      <div className=" px-4 md:px-20 mb-12 flex flex-col items-center md:items-start ">
        <h1 className=" font-bold text-5xl text-[#365A4C]">
          Furni <span className="font-extrabold text-4xl">.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-20">
        <div className="text-[#365A4C]">
          <p className="text-lg mt-2">
            Furni is your go-to destination for stylish and affordable
            furniture. Explore our wide range of products to find the perfect
            pieces for your home.
          </p>
          <div className="flex space-x-4 mt-6 gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#365A4C] transition duration-500  ease-in-out text-4xl hover:scale-125 "
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="md:px-20 ">
          <h3 className="text-2xl font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 p-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-gray-600 hover:text-[#365A4C] transition duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:px-20 ">
          {" "}
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-gray-600 hover:text-[#365A4C] transition duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:px-20">
          {" "}
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-gray-600 hover:text-[#365A4C] transition duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-gray-700 mt-10 border-t-2 border-gray-200 pt-4 px-4 md:px-20 flex flex-col items-center md:justify-between md:flex-row md:mb-20">
        <p>&copy; {new Date().getFullYear()} Furni. All rights reserved.</p>

        <div className="flex justify-between space-x-4 mt-4 md:mt-0">
          <p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#365A4C] px-4 py-2"
            >
              Terms & conditions
            </a>
          </p>
          <p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#365A4C] px-4 py-2"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
