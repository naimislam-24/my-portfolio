"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/app/assets/neon-ocde.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 z-9999">
      {/* Mobile Dropdown Menu */}
      <header className="w-full border-b border-white/10 bg-[#0b1120]/90 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
        <nav className="navbar mx-auto min-h-16 max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <div className="navbar-start">
            <a
              href="#home"
              onClick={() => handleNavClick("Home")}
              className="group flex items-center gap-2.5"
            >
              <Image
                src={logo}
                alt="Logo"
                width={600}
                height={600}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-lg font-bold text-blue-400 transition duration-300 group-hover:border-blue-400 group-hover:bg-blue-500/20"
              />
              <span className="text-lg font-bold tracking-tight sm:text-xl">
                Naim <span className="text-blue-400">Islam</span>
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center gap-1 px-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.name)}
                    className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeLink === link.name
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {activeLink === link.name && (
                      <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-blue-400" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Desktop Contact Button */}
          <div className="navbar-end hidden lg:flex">
            <a
              href="#contact"
              onClick={() => handleNavClick("Contact")}
              className="btn btn-outline h-11 min-h-11 rounded-xl border-blue-400/60 bg-blue-500/5 px-6 text-sm font-semibold normal-case text-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.12)] transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/15 hover:text-white"
            >
              Lets Talk
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          {/* Mobile Menu Button + Dropdown */}
          <div className="navbar-end lg:hidden">
            <div className="relative">
              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-square btn-ghost h-11 w-11 rounded-xl border border-white/10 bg-white/5 text-white hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="m18 6-12 12M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
              {/* Dropdown Panel: Opens Below the Icon */}
              <div
                className={`absolute right-0 top-full z-50 mt-2 w-36 origin-top-right transition-all duration-200 sm:w-36.5 ${
                  isOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
                }`}
              >
                <div className="rounded-xl border border-slate-700/60 bg-[#111827]/95 p-2 shadow-xl shadow-black/30 backdrop-blur-xl">
                  <ul className="flex flex-col gap-0.5">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={() => handleNavClick(link.name)}
                          className={`block rounded-md px-2 py-1.5 text-[11px] font-medium transition-colors ${
                            activeLink === link.name
                              ? "bg-cyan-400/10 text-cyan-400"
                              : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                          }`}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={() => handleNavClick("Contact")}
                    className="mt-1.5 flex h-7 items-center justify-center rounded-md bg-sky-500 px-2 text-[10px] font-semibold text-[#07111e] transition hover:bg-sky-400"
                  >
                    Lets Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
