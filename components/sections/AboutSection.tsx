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
              I&apos;m a software engineering student at UQAM focused on
              full-stack development and DevOps. I enjoy building complete
              applications, from user-friendly interfaces to backend systems,
              and ensuring they are reliable, scalable, and production-ready.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I&apos;m driven by understanding software end-to-end: how features
              are built, how data flows, and how applications are deployed and
              maintained. I value clean architecture, maintainable code, and
              automation, and I&apos;m continuously improving my engineering
              skills.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              <span className="font-semibold text-slate-200">
                Current Focus:
              </span>{" "}
              I&apos;m deepening my backend skills by working with Next.js
              server-side features, APIs, and database-driven architectures.
              With experience using PostgreSQL and tools like Supabase, I&apos;m
              focusing on strengthening backend logic, authentication flows, and
              data handling to build more robust full-stack systems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Outside of development, I enjoy hiking and camping, which reflect
              my approach to both life and engineering: patience, adaptability,
              and long-term growth.
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
