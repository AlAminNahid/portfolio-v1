"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";
import Container from "@/components/ui/Container";
import { ScrollProgress } from "@/components/ui/ScrollUi";

const sectionIds = navLinks.map(({ href }) => href.slice(1));

const iconButton =
  "inline-grid h-10 w-10 place-items-center rounded-full border border-border text-fg transition-colors duration-200 hover:border-border-strong hover:bg-surface";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleDark, mounted } = useTheme();
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border bg-canvas/90 backdrop-blur-md"
    >
      <ScrollProgress />
      <Container className="flex h-[60px] items-center justify-between gap-4">
        <a
          href="#top"
          aria-label={`${SITE_NAME}, back to top`}
          className="font-mono text-xs font-medium tracking-[0.14em] whitespace-nowrap text-fg uppercase"
        >
          {SITE_NAME}
        </a>

        <nav aria-label="Primary" className="flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              aria-current={active === href.slice(1) ? "true" : undefined}
              className="relative hidden py-2 text-sm text-fg-muted transition-colors duration-200 hover:text-fg aria-[current=true]:text-fg aria-[current=true]:after:absolute aria-[current=true]:after:inset-x-0 aria-[current=true]:after:bottom-0.5 aria-[current=true]:after:h-px aria-[current=true]:after:bg-accent md:inline-block"
            >
              {label}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleDark}
            aria-label={
              mounted
                ? isDarkMode
                  ? "Switch to light theme"
                  : "Switch to dark theme"
                : "Toggle theme"
            }
            className={iconButton}
          >
            {mounted && isDarkMode ? (
              <Sun size={17} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Moon size={17} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`${iconButton} md:hidden`}
          >
            {menuOpen ? (
              <X size={17} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={17} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-border md:hidden">
          <Container className="pb-2">
            {navLinks.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[52px] items-center justify-between border-b border-border text-lg tracking-[-0.01em]"
              >
                {label}
                <span className="font-mono text-[11px] text-fg-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
