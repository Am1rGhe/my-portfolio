"use client";

import { experiences } from "@/lib/experienceData";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(51, 65, 85, 0.85) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(51, 65, 85, 0.8) 100%)",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="p-8 md:p-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 35%, #93c5fd 65%, #94a3b8 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "experienceTitleReveal 1s ease-out forwards, gradientTextShift 5s ease-in-out 1s infinite",
            }}
          >
            Experience
          </h2>

          {/* git log style timeline */}
          <div className="relative">
            {/* vertical line  */}
            <div
              className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-0.5 rounded-full"
              style={{
                background: "linear-gradient(to bottom, rgba(147, 197, 253, 0.6), rgba(96, 165, 250, 0.4), rgba(147, 197, 253, 0.6))",
              }}
            />

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6 mb-8 last:mb-0 group">
                {/* Circle node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-sky-400/80 bg-slate-800 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] group-hover:border-sky-300"
                    style={{
                      boxShadow: "0 0 0 4px rgba(30, 41, 59, 0.8)",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-sky-400 group-hover:bg-sky-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-4 pl-2">
                  <span className="text-sky-400 font-mono text-sm">{exp.year}</span>
                  <h3 className="text-xl font-semibold text-slate-200 mt-1 mb-2">{exp.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
