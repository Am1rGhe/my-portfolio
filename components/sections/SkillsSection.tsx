"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/skillsData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(30, 51, 59, 0.85) 0%, rgba(15, 31, 42, 0.9) 50%, rgba(30, 58, 138, 0.15) 100%)",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="p-6 sm:p-8 md:p-12">
          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center"
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 50%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Skills
          </h2>

          {/* Tab navbar */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 pb-4 border-b border-slate-600/50">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-sky-500/30 text-sky-200 border border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-600/30 border border-transparent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Infinite carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 pb-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate skills for seamless infinite loop */}
              {[...(activeCategory?.skills ?? []), ...(activeCategory?.skills ?? [])].map((skill, index) => (
                <div
                  key={`${activeCategory?.id}-${skill.name}-${index}`}
                  className="flex flex-col items-center gap-2 sm:gap-3 flex-shrink-0 group cursor-default"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-slate-800/80 border border-slate-600/50 flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:border-sky-500/50 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-slate-300 text-xs sm:text-sm font-medium text-center line-clamp-1 max-w-[90px] sm:max-w-none">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
