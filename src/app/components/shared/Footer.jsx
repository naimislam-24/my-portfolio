import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b1220] px-4 py-6 sm:px-6 sm:py-8">
        {/* Background Glow */}
        <div className="mx-auto max-w-7xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
            {/* Left Side */}
            <p className="text-sm font-medium text-slate-300">
              © Md Naim Islam.
            </p>
            {/* Right Side */}
            <p className="text-xs leading-6 text-slate-400 sm:text-sm">
              Built with passion for the web.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
