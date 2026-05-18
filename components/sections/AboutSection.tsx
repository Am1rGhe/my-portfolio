"use client";

import { useState } from "react";

export default function AboutSection() {
  const [imgError, setImgError] = useState(false);
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 50%, rgba(30, 58, 138, 0.2) 100%)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 p-6 sm:p-8 md:p-12">
          {/* Info */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
              style={{
                background:
                  "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Me
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I&apos;m a{" "}
              <span className="font-semibold text-slate-100">full-stack developer</span>{" "}
              and software engineering student at{" "}
              <span className="font-semibold text-sky-300">UQAM</span>, currently
              building{" "}
              <span className="font-semibold text-slate-100">
                production-grade applications
              </span>{" "}
              used by real customers. At{" "}
              <span className="font-semibold text-sky-300">Galeries L&apos;Original</span>
              , I ship features for two live platforms — a custom art product and
              a marketplace serving Montréal&apos;s{" "}
              <span className="font-semibold text-slate-100">Vieux-Port</span> and{" "}
              <span className="font-semibold text-slate-100">Plateau</span> galleries
              — working across{" "}
              <span className="font-semibold text-sky-300">Next.js App Router</span>
              , server-side data flows, and TypeScript-safe integrations.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I approach software{" "}
              <span className="font-semibold text-slate-100">end-to-end</span>: from
              crafting interfaces people actually enjoy using, to designing the
              backend logic and data architecture that keeps things running
              reliably. I care about{" "}
              <span className="font-semibold text-slate-100">clean code</span>,{" "}
              <span className="font-semibold text-slate-100">maintainability</span>
              , and shipping things that work in{" "}
              <span className="font-semibold text-sky-300">production</span> — not
              just in development.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I&apos;m also comfortable working with{" "}
              <span className="font-semibold text-slate-100">
                AI-assisted development tools
              </span>{" "}
              (
              <span className="font-semibold text-sky-300">Cursor</span>,{" "}
              <span className="font-semibold text-sky-300">Claude</span>) to
              accelerate delivery while maintaining{" "}
              <span className="font-semibold text-slate-100">code quality</span>
              .
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Beyond code, I co-founded{" "}
              <span className="font-semibold text-sky-300">Codyssey</span> — an
              educational initiative inside Algeria&apos;s largest IT club — and have
              tutored peers in databases, web fundamentals, and helped organize a
              hackathon for new CS students at UQAM.
            </p>
            <p
              className="text-slate-300 leading-relaxed pl-4 border-l-2 border-sky-400/50 italic"
              style={{
                background:
                  "linear-gradient(90deg, rgba(56, 189, 248, 0.06) 0%, transparent 100%)",
              }}
            >
              When I&apos;m away from the keyboard, you&apos;ll find me{" "}
              <span className="font-semibold text-slate-100 not-italic">hiking</span>{" "}
              — which teaches the same things good engineering does:{" "}
              <span className="font-semibold text-sky-300">patience</span>,{" "}
              <span className="font-semibold text-sky-300">adaptability</span>, and{" "}
              <span className="font-semibold text-sky-300">
                thinking a few steps ahead
              </span>
              .
            </p>
          </div>

          {/* Picture in the right side */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-2xl transition-all duration-500 cursor-pointer hover:shadow-[0_0_50px_rgba(147,197,253,0.6),0_0_100px_rgba(96,165,250,0.3)] hover:scale-[1.02] overflow-hidden bg-slate-700/30">
              {imgError ? (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-5xl font-bold rounded-2xl">
                  AG
                </div>
              ) : (
                <img
                  src="/images/profile/porfilePic.jpg"
                  alt="Amir Ghouari"
                  className="w-full h-full object-cover rounded-2xl transition-all duration-500 hover:brightness-110"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
