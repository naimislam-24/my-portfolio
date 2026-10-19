import Image from "next/image";
import projectimage1 from "@/app/assets/fitlog.jpg";
import projectimage2 from "@/app/assets/bazardor.jpg";
import projectimage3 from "@/app/assets/project-image-3.jpg";

const projects = [
  {
    title: "FITLog",
    category: "Web Application",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "API",
      "DaisyUI",
      "React Toastify",
    ],
    description:
      "A modern dashboard with useful features and an intuitive interface for managing data efficiently.",
    image: projectimage1,
    demo: "https://fit-project-snowy.vercel.app/",
    source: "https://github.com/YOUR_USERNAME/fiflog",
    featured: true,
  },
  {
    title: "Bazar Dor",
    category: "Price Tracking",
    tags: [
      "Next.js",
      "API",
      "TypeScript",
      "Tailwind",
      "HeroUi",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
    ],
    description:
      "A grocery price tracking platform that helps users explore and compare product prices in Bangladesh.",
    image: projectimage2,
    demo: "https://bazar-dor-chi-two.vercel.app/",
    source: "https://github.com/YOUR_USERNAME/bazardor",
    featured: true,
  },
  {
    title: "Future Project",
    category: "Coming Soon",
    tags: ["Next.js", "UI/UX"],
    description:
      "Something exciting is in progress. A new project with modern design and useful features is coming soon.",
    image: projectimage3,
    demo: "/",
    source: "/",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <section
        id="projects"
        className="relative overflow-hidden bg-[#080d19] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-10"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-6 sm:mb-8 md:mb-8">
            <div className="mt-2 sm:mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-3 py-1 sm:mb-3 sm:px-3.5 sm:py-1.5 sm:text-sm lg:text-base text-xs font-medium text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Projects
                </div>
                <h2 className="flex gap-2 text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
                  Featured
                  <div className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Projects
                  </div>
                </h2>
                <div className="mt-2 h-1 w-12 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 sm:mt-3 sm:w-14 lg:mt-4 lg:w-16" />
              </div>
              <span className="text-xs text-slate-500 sm:text-sm">
                {projects.length} Projects
              </span>
            </div>
          </div>
          {/* Project cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-linear-to-b from-[#111b2b] to-[#0b1220] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_18px_45px_rgba(8,145,178,0.12)]"
              >
                {/* Image */}
                <div className="relative m-3 mb-0 overflow-hidden rounded-xl border border-white/10 bg-[#080d19]">
                  <div className="aspect-16/10 overflow-hidden">
                    <Image
                      src={project.image}
                      width={600}
                      height={600}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#080d19]/40 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-30" />
                  {project.featured && (
                    <span className="absolute left-3 top-3 rounded-full border border-cyan-300/20 bg-[#080d19]/80 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
                      Featured
                    </span>
                  )}
                  {!project.featured && (
                    <span className="absolute right-3 top-3 rounded-full border border-amber-300/20 bg-[#080d19]/85 px-3 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-md">
                      Coming Soon
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-5 pt-4 sm:p-6 sm:pt-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-blue-400/15 bg-blue-400/[0.07] px-2.5 py-1 text-[11px] font-medium text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {project.category}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className={`inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                        project.featured
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
                          : "border border-amber-400/20 bg-amber-400/5 text-amber-200 hover:bg-amber-400/10"
                      }`}
                    >
                      Live Demo
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 px-3 py-2.5 text-sm font-semibold text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/6 hover:text-cyan-200"
                    >
                      Source Code
                      <span aria-hidden="true">⌘</span>
                    </a>
                  </div>
                </div>
                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-linear-to-r from-blue-500 to-cyan-300 transition-all duration-300 group-hover:w-2/3"
                  style={{ transitionDelay: `${index * 30}ms` }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
