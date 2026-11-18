"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-steel-900/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-white" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-md bg-spark-500 font-display text-lg font-bold">SS</span>
          <span className="font-display leading-none tracking-wide uppercase">
            <span className="block text-lg font-semibold">Shayona Steel</span>
            <span className="block text-[0.65rem] tracking-[0.2em] text-steel-300">Fabrication Works</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-steel-100 transition hover:text-spark-400">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.phoneHref}
          className="hidden items-center gap-2 rounded-md bg-spark-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-spark-600 md:flex"
        >
          <PhoneIcon className="size-4" /> Call Now
        </a>

        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-steel-700 px-4 pb-5 md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-steel-100 hover:text-spark-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-md bg-spark-500 px-4 py-3 font-semibold text-white"
          >
            <PhoneIcon className="size-4" /> Call {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
