import neonicon from "@/app/assets/neon-ocde.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div>
      <section
        id="about"
        className="relative isolate overflow-hidden bg-[#080d19] px-4 py-18 text-white sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-10"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-56 w-56 rounded-full bg-blue-600/10 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />
        <div className="mx-auto w-full max-w-6xl">
          {/* Section heading */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-3 py-1.5 text-xs font-medium text-cyan-300 sm:mb-4 sm:px-3.5 sm:text-sm lg:text-2xl">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              About Me
            </div>
            <h2 className="flex gap-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              A Little
              <div className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                About Me
              </div>
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 sm:mt-5 sm:w-16" />
          </div>
          {/* About content */}
          <div className="relative rounded-xl border border-white/8 bg-white/2.5 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/20 sm:rounded-2xl sm:p-6 md:p-8 lg:p-10">
            <p className="max-w-4xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg md:leading-9">
              I’m a Frontend AI Web Developer who enjoys building modern,
              responsive, and user-friendly websites. I’m passionate about
              writing clean, well-structured code, solving complex problems, and
              exploring new technologies to continuously improve my development
              skills. mane ki
            </p>
            <p className="max-w-4xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg md:leading-9 mt-10">
              I’m currently learning Full Stack AI Web Development and building
              modern, responsive web applications. I’m passionate about web
              development and enjoy turning ideas into real-world projects while
              exploring new technologies. I’m continuously improving my
              programming skills, learning best practices, and working toward
              becoming a skilled and professional Full Stack Developer.
            </p>
            {/* Developer highlight */}
            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:gap-4 sm:pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                {/* <Code2 size={21} /> */}
                <Image
                  src={neonicon}
                  alt="Neon Image"
                  width={600}
                  height={600}
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-6 text-white sm:text-base">
                  Passionate About Development
                </h3>
                <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm">
                  Learning, building, and growing one project at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
