"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

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
const NavbarMobile = ({ handleNav, setThemeFun, theme, top }) => {
  return (
    <div
      className="backdrop-blur-lg backdrop-filter dark:bg-[#000000cc] dark:shadow-gray-800 duration-500 fixed flex justify-between md:hidden px-5 py-3 shadow-md shadow-gray-300 transition-all w-full z-10"
      data-navbar="true"
      style={{ top }}
    >
      {/* Name Logo */}
      <div className="flex gap-4 items-center">
        <p className="flex text-gray-400">
          <a
            className="cursor-pointer dark:hover:text-[#07d0e5] font-bold hover:text-[#c72c6c] text-lg transition-colors"
            href="#home"
            onClick={(e) => handleNav(e, "#home")}
          >
            Al-Jafarawy
          </a>
        </p>
      </div>

      {/* Toggle Theme Button */}
      <div className="flex gap-4 items-center">
        <button
          aria-label="Toggle theme"
          className="dark:text-[#07d0e5] font-semibold text-2xl text-[#c72c6c] transition-transform hover:scale-110"
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

  // helpers to scroll with offset for fixed header
  const getVisibleNavbarHeight = () => {
    const els = document.querySelectorAll("[data-navbar='true']");
    for (const el of els) {
      const style = window.getComputedStyle(el);
      if (style.display !== "none" && style.visibility !== "hidden") {
        return el.offsetHeight || 70;
      }
    }
    return 70;
  };

  const scrollToId = (hash) => {
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = getVisibleNavbarHeight();
    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNav = (e, link) => {
    if (link && link.startsWith("#")) {
      e.preventDefault();
      scrollToId(link);
    }
  };

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className="backdrop-blur-lg backdrop-filter dark:bg-[rgba(0,0,0,0.8)] dark:shadow-gray-800 duration-500 fixed hidden h-[70px] items-center justify-between max-w-full px-8 shadow-sm shadow-gray-300 transition-all w-full z-10 md:flex"
        data-navbar="true"
        style={{ top }}
      >
        <div className="flex gap-4 items-center justify-between mx-auto w-full max-w-7xl">
          {/* Name Logo */}
          <p className="flex text-gray-400">
            <a
              className="cursor-pointer dark:hover:text-[#07d0e5] font-bold hover:text-[#c72c6c] text-lg transition-colors"
              href="#home"
              onClick={(e) => handleNav(e, "#home")}
            >
              Al-Jafarawy
            </a>
          </p>

          {/* Navbar Links */}
          <div className="flex gap-4 h-full">
            {NavbarMenu.map((navbar) => (
              <a
                className="dark:text-[#07d0e5] font-semibold text-[#c72c6c]"
                href={navbar.link}
                key={navbar.name}
                onClick={(e) => handleNav(e, navbar.link)}
              >
                <div className="flex h-full items-center px-2 pb-1 transition-all hover:border-b-4 hover:pb-0 hover:border-[#c72c6c] dark:hover:border-[#07d0e5]">
                  {navbar.name}
                </div>
              </a>
            ))}
          </div>

          {/* Toggle Theme button */}
          <div className="flex gap-4 items-center">
            <button
              aria-label="Toggle theme"
              className="dark:text-[#07d0e5] text-[#c72c6c] text-xl transition-transform hover:scale-110"
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
      <NavbarMobile
        handleNav={handleNav}
        setThemeFun={setThemeFun}
        theme={theme}
        top={top}
      />
    </Fragment>
  );
};

export default Navbar;
