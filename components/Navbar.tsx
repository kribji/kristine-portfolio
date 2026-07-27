"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-white border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-5 md:px-10">
        <p className="small-caps text-muted hidden md:block">
          Frontend Developer, AI Builder & Concept Designer
        </p>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-[14px] font-normal text-foreground transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center md:hidden">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex h-8 w-8 items-center justify-center"
          >
            <span
              className={`absolute h-px w-5 bg-foreground transition-transform duration-200 ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-foreground transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-foreground transition-transform duration-200 ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <ul className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-sans text-[14px] font-normal text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
