"use client";

import { useState } from "react";
import { projects } from "@/lib/projectsData";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? projects : projects.filter((p) => p.highlighted);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <div
        className="relative w-full max-w-6xl rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(30, 51, 59, 0.85) 0%, rgba(15, 31, 42, 0.9) 50%, rgba(30, 58, 138, 0.15) 100%)",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="p-6 sm:p-8 md:p-12">
          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 50%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </h2>

          {/* View All */}
          <div className="flex justify-center mb-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-xl font-medium text-slate-200 bg-slate-700/50 border border-slate-600/50 hover:border-sky-500/50 hover:bg-sky-500/20 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              {showAll ? "Show Highlighted Only" : "View All Projects"}
            </button>
          </div>

          {/* project cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {displayProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl overflow-hidden bg-slate-800/50 border border-slate-600/50 transition-all duration-500 hover:border-sky-500/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.2),inset_0_0_30px_rgba(56,189,248,0.05)]"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">{project.description}</p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-700/60 hover:bg-slate-600/80 text-slate-200 text-sm font-medium transition-all duration-300 hover:gap-3 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    >
                      <GithubIcon className="w-5 h-5 flex-shrink-0" />
                      <span>See code</span>
                      <ArrowIcon className="w-4 h-4 flex-shrink-0" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600/60 hover:bg-sky-500/80 text-white text-sm font-medium transition-all duration-300 hover:gap-3 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                      >
                        <span>View demo</span>
                        <ArrowIcon className="w-4 h-4 flex-shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
