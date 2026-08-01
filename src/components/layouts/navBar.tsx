"use client";

import Image from "next/image";
import downloadIcon from "@/public/assets/download-icon.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import { navLinks } from "@/constants/navigation";
import { useTheme } from "@/hooks/useTheme";
import { useScrolled } from "@/hooks/useScrolled";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDark, mounted } = useTheme();
  const isScrolled = useScrolled();

  useEscapeKey(() => setIsMenuOpen(false));
  useBodyScrollLock(isMenuOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-[8%] py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-canvas/80 backdrop-blur-md border-b border-border/80"
            : ""
        }`}
      >
        <a href="#top" className="text-base font-medium tracking-tight text-fg">
          Nahid<span className="text-accent font-bold">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-fg-muted hover:text-fg transition-colors duration-200"
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
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex h-9 w-9 items-center justify-center rounded-full text-fg-muted hover:bg-surface-raised transition"
          >
            {mounted ? (
              isDarkMode ? (
                <FaSun size={16} />
              ) : (
                <FaMoon size={15} />
              )
            ) : (
              <span className="h-4 w-4" />
            )}
          </button>
          <a
            href="/Nahid_s_Resume.pdf"
            download
            className="hidden md:flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border-strong text-fg-secondary hover:bg-surface-subtle transition"
          >
            Resume
            <Image src={downloadIcon} alt="" className="w-3 dark:invert" />
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex h-9 w-9 items-center justify-center text-fg-secondary"
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
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-surface flex flex-col py-16 px-8 gap-5">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-5 top-5 text-fg-muted hover:text-fg transition"
              aria-label="Close menu"
            >
              <HiX size={22} />
            </button>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-fg-secondary hover:text-accent transition"
              >
                {label}
              </a>
            ))}
            <a
              href="/Nahid_s_Resume.pdf"
              download
              className="mt-4 text-sm text-fg-muted hover:text-fg-secondary transition"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      )}
    </>
  );
}
