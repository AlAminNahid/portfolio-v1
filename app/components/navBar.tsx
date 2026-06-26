"use client";

import Image from "next/image";
import downloadIcon from "@/public/assets/download-icon.png";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved ? saved === "dark" : prefersDark;
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleDark = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-[8%] py-4 transition-all duration-300 ${
          isScroll
            ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80"
            : ""
        }`}
      >
        <a href="#top" className="text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
          Nahid<span className="text-indigo-500 font-bold">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleDark}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            {isDarkMode ? <FaSun size={16} /> : <FaMoon size={15} />}
          </button>
          <a
            href="/Nahid_s_Resume.pdf"
            download
            className="hidden md:flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
          >
            Resume
            <Image src={downloadIcon} alt="" className="w-3 dark:invert" />
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex h-9 w-9 items-center justify-center text-zinc-700 dark:text-zinc-300"
            aria-label="Open menu"
          >
            <HiMenuAlt3 size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-zinc-900 flex flex-col py-16 px-8 gap-5">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-5 top-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              aria-label="Close menu"
            >
              <HiX size={22} />
            </button>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              >
                {label}
              </a>
            ))}
            <a
              href="/Nahid_s_Resume.pdf"
              download
              className="mt-4 text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      )}
    </>
  );
}
