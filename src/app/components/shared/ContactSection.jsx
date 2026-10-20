"use client";

const emailInfo = [
  {
    label: "Email",
    value: "naimislam709677@gmail.com",
    href: "mailto:your.email@example.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

const contactInfo = [
  {
    label: "GitHub",
    value: "Visit My GitHub Profile",
    href: "https://github.com/naimislam-24",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path
          d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.6 1.2 15 3a13 13 0 0 0-7 0C5.4 1.2 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 8 18.1V22"
          transform="translate(1 0)"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Visit My LinkedIn Profile",
    href: "https://www.linkedin.com/in/naim-islam24/?isSelfProfile=true",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7m0-10v.1M12 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  return (
    <div>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#080d19] px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-28"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-4 sm:mb-13 md:mb-6 lg:mb-14">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-3 py-1 sm:mb-3 sm:px-3.5 sm:py-1.5 sm:text-sm lg:text-base text-xs font-medium text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Contact
            </div>
            <h2 className="flex gap-2 text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
              Contact
              <div className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Me
              </div>
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 sm:mt-3 sm:w-14 lg:mt-4 lg:w-16" />
          </div>
          {/* Contact layout */}
          <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr] py-3">
            {/* Contact form */}
            <div className="rounded-2xl border border-white/8 bg-linear-to-br from-[#111b2b] to-[#0c1422] p-5 shadow-xl shadow-black/10 sm:p-8">
              <h3 className="text-xl font-semibold">Send a Message</h3>
              <p className="mt-2 text-sm text-slate-400">
                Fill out the form below to get in touch.
              </p>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-700/60 bg-linear-to-br from-slate-900 to-[#0b1220] p-5 sm:p-8 text-white shadow-xl"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="7c35838e-a750-466c-aa88-a3f0efadd111"
                />
                {/* Name and Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-200"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full rounded-xl border border-slate-700/70 bg-[#080f1b] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none transition duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-200"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-700/70 bg-[#080f1b] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none transition duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>
                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-y rounded-xl border border-slate-700/70 bg-[#080f1b] px-4 py-4 text-sm leading-6 text-white placeholder:text-slate-600 outline-none transition duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/30 active:translate-y-0"
                >
                  Send Message
                  <span aria-hidden="true" className="text-xl leading-none">
                    →
                  </span>
                </button>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Your email app will open with your message prepared. You can
                  review it before sending.
                </p>
              </form>
            </div>
            {/* Contact information */}
            <aside className="rounded-2xl border border-white/8 bg-linear-to-br from-[#111b2b] to-[#0c1422] p-5 shadow-xl shadow-black/10 sm:p-8">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                You can also reach me through these platforms.
              </p>
              <div className="mt-7 space-y-3">
                {emailInfo.map((i, ind) => (
                  <span
                    key={ind}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent bg-white/2 p-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-300 transition group-hover:bg-cyan-400/15">
                      {i.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-500">
                        {i.label}
                      </span>
                      <span className="mt-1 block break-all text-sm font-medium text-slate-300 transition group-hover:text-cyan-300">
                        {i.value}
                      </span>
                    </span>
                    <span className="ml-auto shrink-0 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300">
                      ↗
                    </span>
                  </span>
                ))}
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent bg-white/2 p-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-300 transition group-hover:bg-cyan-400/15">
                      {item.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-500">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-all text-sm font-medium text-slate-300 transition group-hover:text-cyan-300">
                        {item.value}
                      </span>
                    </span>
                    <span className="ml-auto shrink-0 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-7 rounded-xl border border-blue-400/15 bg-blue-400/4 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-sm font-semibold text-slate-200">
                    Open to Opportunities
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Interested in exciting projects, collaboration, and new
                  opportunities.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
