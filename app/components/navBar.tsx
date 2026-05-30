"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png";
import downloadIcon from "@/public/assets/download-icon.png";
import headerBG from "@/public/assets/header-bg-color.png";
import menuBlackIcon from "@/public/assets/menu-black.png";
import closeIcon from "@/public/assets/close-black.png";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function NavBar() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const nextTheme = !isDarkMode;

    setIsDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <>
      <div className="absolute top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={headerBG} alt="header-BG" className="w-full" />
      </div>

      {/* Big Screen View */}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300 ${isScroll ? "bg-white/70 backdrop-blur-lg dark:bg-gray-950/70" : ""}`}
      >
        <a href="#top">
          <Image
            src={logo}
            className="w-28 cursor-pointer mr-14 dark:invert"
            alt="Logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-5 lg:gap-7 rounded-full px-8 lg:px-10 py-3 transition-colors duration-300 ${isScroll ? "" : "bg-white/50 shadow-sm dark:bg-gray-900/70 dark:shadow-gray-800"}`}
        >
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={toggleDarkMode}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-500 bg-white/70 text-gray-800 transition hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-yellow-300 dark:hover:bg-gray-800"
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={16} />}
          </button>
          <a
            href="/Nahid_s_Resume.pdf"
            download
            className="hidden md:flex px-10 py-3 border rounded-full border-gray-500 items-center gap-2 transition-colors duration-300 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            my resume
            <Image
              src={downloadIcon}
              alt="Download-Icon"
              className="w-4 dark:invert"
            />
          </a>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="block md:hidden ml-3"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src={menuBlackIcon}
              alt="Menu-Icon"
              className="w-6 dark:invert"
            />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-gray-900 ${isMenuOpen ? "right-0" : "-right-64"}`}
        >
          <li className="absolute right-6 top-6 list-none">
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src={closeIcon}
                alt="Close-Icon"
                className="w-5 cursor-pointer dark:invert"
              />
            </button>
          </li>

          <li>
            <a
              className="font-ovo"
              onClick={() => setIsMenuOpen(false)}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-ovo"
              onClick={() => setIsMenuOpen(false)}
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="font-ovo"
              onClick={() => setIsMenuOpen(false)}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-ovo"
              onClick={() => setIsMenuOpen(false)}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="font-ovo"
              onClick={() => setIsMenuOpen(false)}
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-ovo"
              onClick={() => setIsMenuOpen(false)}
              href="#contact"
            >
              Contact Me
            </a>
          </li>
          <li>
            <a
              className="font-ovo flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
              href="/Nahid_s_Resume.pdf"
              download
            >
              My Resume
              <Image
                src={downloadIcon}
                alt="Download-Icon"
                className="w-4 dark:invert"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
