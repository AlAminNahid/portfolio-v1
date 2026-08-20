"use client";

import Image from "next/image";
import downloadIcon from "@/public/assets/download-icon.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/constants/navigation";
import { useTheme } from "@/hooks/useTheme";
import { useScrolled } from "@/hooks/useScrolled";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { isDarkMode, toggleDark, mounted } = useTheme();
  const isScrolled = useScrolled();

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
            <li
              key={href}
              className="relative"
              onMouseEnter={() => setHoveredLink(href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a
                href={href}
                className="relative text-sm text-fg-muted hover:text-fg transition-colors duration-200"
              >
                {label}
                {hoveredLink === href && (
                  <motion.span
                    layoutId="nav-hover-underline"
                    className="absolute left-0 right-0 -bottom-1 h-px bg-fg"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
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
          <Button
            asChild
            variant="outline"
            className="hidden md:flex h-auto items-center gap-2 rounded-full border-border-strong px-4 py-2 text-sm font-normal text-fg-secondary hover:bg-surface-subtle hover:text-fg-secondary"
          >
            <a href="/Nahid_s_Resume.pdf" download>
              Resume
              <Image src={downloadIcon} alt="" className="w-3 dark:invert" />
            </a>
          </Button>
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
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent
          aria-describedby={undefined}
          className="w-64 data-[side=right]:w-64 sm:max-w-64 data-[side=right]:sm:max-w-64 bg-surface flex flex-col py-16 px-8 gap-5"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          {navLinks.map(({ label, href }) => (
            <SheetClose key={href} asChild>
              <a
                href={href}
                className="text-base font-medium text-fg-secondary hover:text-accent transition"
              >
                {label}
              </a>
            </SheetClose>
          ))}
          <a
            href="/Nahid_s_Resume.pdf"
            download
            className="mt-4 text-sm text-fg-muted hover:text-fg-secondary transition"
          >
            Download Resume ↓
          </a>
        </SheetContent>
      </Sheet>
    </>
  );
}
