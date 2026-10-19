import Image from "next/image";
import next from "@/app/assets/nextjs.png";
import teact from "@/app/assets/react-icon.webp";
import javascript from "@/app/assets/img_javascript.jpg";
import tailwind from "@/app/assets/images.png";
import typescript from "@/app/assets/ts-images.png";
import git from "@/app/assets/git.png";
import mongodb from "@/app/assets/mongodb.png";
import css from "@/app/assets/css.png";
import html from "@/app/assets/html-5.png";
import github from "@/app/assets/github.png";

const skills = [
  { name: "Next.js", icon: next, color: "white" },
  { name: "React.js", icon: teact, color: "cyan" },
  { name: "JavaScript", icon: javascript, color: "yellow" },
  { name: "Tailwind CSS", icon: tailwind, color: "cyan" },
  { name: "TypeScript", icon: typescript, color: "blue" },
  { name: "Git", icon: git, color: "orange" },
  { name: "MongoDB", icon: mongodb, color: "green" },
  { name: "CSS", icon: css, color: "blue" },
  { name: "HTML5", icon: html, color: "orange" },
  { name: "GitHub", icon: github, color: "white" },
];

const SkillsSection = () => {
  return (
    <div>
      <section
        id="skills"
        className="relative overflow-hidden bg-[#080d19] px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-30"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mb-10 text-center sm:mb-14">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-3 py-1.5 text-xs font-medium text-cyan-300 sm:mb-4 sm:px-3.5 sm:text-sm lg:text-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              My Expertise
            </span>
            <div className="mx-auto w-fit text-left">
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Technical{" "}
                <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <div className="mt-3 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 sm:mt-4 sm:w-16" />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Technologies and tools I use to build modern, responsive, and
              user-friendly web applications.
            </p>
          </div>
          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex min-h-32 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br from-white/[0.07] to-white/2 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-cyan-400/6 hover:shadow-[0_10px_35px_rgba(34,211,238,0.10)] sm:min-h-36 sm:p-6"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-500/8 via-transparent to-cyan-400/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/8 bg-[#0b1220] p-2.5 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={600}
                    height={600}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="relative mt-3 text-center text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover:text-cyan-300 sm:text-base">
                  {skill.name}
                </h3>
                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
