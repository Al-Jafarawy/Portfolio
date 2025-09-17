"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

import { ThemeContext } from "@/context/themeContext";

// Navbar Items
export const NavbarMenu = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Tech Stack", link: "#techStack" },
  { name: "Experience", link: "#work-experience" },
  { name: "Project", link: "#project" },
];

// NavbarMobile Component
const NavbarMobile = ({ setThemeFun, theme, top }) => {
  return (
    <div
      className="w-full px-5 py-3 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-filter backdrop-blur-lg flex justify-between md:hidden shadow-md shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500"
      style={{ top }}
    >
      <div className="flex items-center gap-4">
        {/* Name Logo */}
        <p className="text-gray-400 flex">
          <span className="text-lg font-bold">Al-Jafarawy</span>
        </p>
      </div>

      {/* Toggle Theme Button */}
      <div className="flex items-center gap-4">
        <button
          className="text-[#c72c6c] dark:text-[#07d0e5] text-2xl font-semibold hover:scale-110"
          onClick={setThemeFun}
        >
          {theme === "dark" ? <TbBulbFilled /> : <BsFillLightningChargeFill />}
        </button>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [top, setTop] = useState("0");
  const { setThemeFun, theme } = useContext(ThemeContext);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0");
      } else {
        setTop("-80px");
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className="w-full h-[70px] bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-filter backdrop-blur-lg hidden md:flex fixed z-10 transition-all duration-500 shadow-sm shadow-gray-300 dark:shadow-gray-800"
        style={{ top }}
      >
        {/* Container limited to max-w-7xl */}
        <div className="max-w-7xl w-full mx-auto px-8 flex justify-between items-center gap-4">
          {/* Name Logo */}
          <p className="text-gray-400 flex">
            <span className="text-lg font-bold">Al-Jafarawy</span>
          </p>

          {/* Navbar Links */}
          <div className="h-full flex gap-4">
            {NavbarMenu.map((navbar) => (
              <Link
                className="text-[#c72c6c] dark:text-[#07d0e5] font-semibold"
                href={navbar.link}
                key={navbar.name}
              >
                <div className="h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4 border-[#c72c6c] dark:border-[#07d0e5] transition-all">
                  {navbar.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Toggle Theme button */}
          <div className="flex items-center gap-4">
            <button
              className="text-xl text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110"
              onClick={setThemeFun}
            >
              {theme === "dark" ? (
                <TbBulbFilled />
              ) : (
                <BsFillLightningChargeFill />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <NavbarMobile setThemeFun={setThemeFun} theme={theme} top={top} />
    </Fragment>
  );
};

export default Navbar;
