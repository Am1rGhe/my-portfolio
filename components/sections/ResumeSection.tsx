"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeLinks } from "@/lib/resumeData";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

export default function ResumeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(30, 51, 59, 0.85) 0%, rgba(15, 31, 42, 0.9) 50%, rgba(30, 58, 138, 0.15) 100%)",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="p-12 md:p-16 text-center">
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 50%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Resume / CV
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Download my resume in your preferred language
          </p>

          {/* Download button(s) */}
          <div className="flex flex-col items-center gap-4 min-h-[120px]">
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.button
                  key="main"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                  onClick={() => setIsExpanded(true)}
                  className="group flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-slate-800/60 border-2 border-slate-600/50 text-slate-200 font-semibold text-lg transition-all duration-300 hover:border-sky-500/70 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]"
                >
                  <DownloadIcon className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Download CV</span>
                </motion.button>
              ) : (
                <motion.div
                  key="split"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, staggerChildren: 0.1 }}
                  className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
                >
                  <motion.a
                    href={resumeLinks.english}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/60 border-2 border-slate-600/50 text-slate-200 font-medium transition-all duration-300 hover:border-sky-500/70 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span>English</span>
                  </motion.a>
                  <motion.a
                    href={resumeLinks.french}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/60 border-2 border-slate-600/50 text-slate-200 font-medium transition-all duration-300 hover:border-sky-500/70 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                  >
                    <span className="text-lg">🇫🇷</span>
                    <span>French</span>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>

            {isExpanded && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsExpanded(false)}
                className="text-slate-500 text-sm hover:text-slate-300 transition-colors mt-2"
              >
                ← Back
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
