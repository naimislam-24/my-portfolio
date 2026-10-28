import Image from "next/image";
import React from "react";
import banner from "@/app/assets/banner1.jpeg";
import neonicon from "@/app/assets/neon-ocde.png";
import github from "@/app/assets/github.png";
import linkind from "@/app/assets/linkind.png";

const Banner = () => {
  return (
    <div>
      <main
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#080d19] text-white"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
        <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-12">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Introduction */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Frontend Web Developer
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
                Hi, Im
                <span className="mt-2 block bg-linear-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                  Md. Naim Islam
                </span>
              </h1>
              <h2 className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-slate-300 sm:text-2xl lg:mx-0">
                Building Modern, Responsive &amp;
                <span className="text-blue-400"> User-Focused </span>
                Web Experiences.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-400 sm:text-lg lg:mx-0">
                I build modern web applications and continuously improve my
                development skills to create clean, efficient, and engaging
                digital experiences.
              </p>
              {/* Buttons */}
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40"
                >
                  View My Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-white/3 px-7 py-4 font-semibold text-cyan-200 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/10"
                >
                  Contact Me
                </a>
              </div>
              {/* Social links */}
              <div className="mt-9 flex items-center justify-center gap-4 lg:justify-start">
                <a
                  href="https://github.com/naimislam-24"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-2xl border border-white/10 bg-white/4 p-2 text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                >
                  <Image
                    src={github}
                    alt="Github Image"
                    width={20}
                    height={20}
                    className="rounded-4xl"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/naim-islam24/?isSelfProfile=true"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-2xl border border-white/10 bg-white/4 p-2 text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                >
                  <Image
                    src={linkind}
                    alt="Github Image"
                    width={20}
                    height={20}
                    className="rounded-4xl"
                  />
                </a>
                <div className="ml-2 flex items-center gap-2 text-sm text-slate-500">
                  Always learning, always building.
                </div>
              </div>
            </div>
            {/* Profile image */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="group relative w-full max-w-[320px] sm:max-w-97.5">
                {/* Glow behind card */}
                <div className="absolute -inset-1 rounded-4xl bg-linear-to-br from-blue-500 via-cyan-400 to-blue-700 opacity-60 blur-md transition duration-500 group-hover:opacity-90" />
                <div className="relative rounded-4xl border border-white/15 bg-[#111b2b]/90 p-2 shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
                  <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-linear-to-br from-slate-800 to-[#0b1424]">
                    <Image
                      src={banner}
                      alt="Md Naim Islam - Web Developer"
                      className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                    />
                    {/* Bottom image gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#080d19]/70 to-transparent" />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111827]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-cyan-300">
                    <Image
                      src={neonicon}
                      alt="Neon Image"
                      width={600}
                      height={600}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Web Developer
                    </p>
                    <p className="text-xs text-slate-400">
                      Building for the web
                    </p>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute -right-3 -top-3 h-16 w-16 rounded-2xl border-r-2 border-t-2 border-cyan-400/50" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Banner;
