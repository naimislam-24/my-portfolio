"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-16 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <section className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Status */}
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          ERROR 404
        </p>
        {/* 404 Number */}
        <h1 className="bg-linear-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-[120px] font-black leading-none tracking-tighter text-transparent sm:text-[180px]">
          404
        </h1>
        {/* Message */}
        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
          Oops! Page Not Found
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
          The page youre looking for doesnt exist or has been moved. Lets get
          you back to my portfolio.
        </p>
        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
              <path d="M20 12H9" />
            </svg>
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-violet-400 hover:text-white"
          >
            Go Back
          </button>
        </div>
        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="text-xs tracking-wide text-gray-500">
            LOST IN SPACE? &nbsp; LETS FIND YOUR WAY HOME.
          </p>
        </div>
      </section>
    </main>
  );
}
