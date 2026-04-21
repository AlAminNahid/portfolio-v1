"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png";
import downloadIcon from "@/public/assets/download-icon.png";
import headerBG from "@/public/assets/header-bg-color.png";
import menuBlackIcon from "@/public/assets/menu-black.png";
import closeIcon from "@/public/assets/close-black.png";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={headerBG} alt="header-BG" className="w-full" />
      </div>

      {/* Big Screen View */}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg" : ""}`}
      >
        <a href="#top">
          <Image src={logo} className="w-28 cursor-pointer mr-14" alt="Logo" />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm"}`}
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
          <a>
            href="/Nahid_s_Resume.pdf"
            download
            className="hidden md:flex px-10 py-3 border rounded-full border-gray-500 items-center gap-2"
          >
            my resume
            <Image src={downloadIcon} alt="Download-Icon" className="w-4" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={menuBlackIcon} alt="Moon-Icon" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={closeIcon}
              alt="Close-Icon"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
          <li>
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/Nahid_s_Resume.pdf"
                download
                className="font-ovo flex items-center gap-2"
              >
                My Resume
                <Image src={downloadIcon} alt="Download-Icon" className="w-4" />
              </a>
              <button className="block md:hidden ml-3" onClick={openMenu}>
                <Image src={menuBlackIcon} alt="Moon-Icon" className="w-4" />
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
