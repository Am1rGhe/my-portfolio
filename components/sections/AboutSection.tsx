"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

type TextStyle = "normal" | "strong" | "accent";

type TextPart = {
  text: string;
  style: TextStyle;
};

const styleClassName: Record<TextStyle, string> = {
  normal: "",
  strong: "font-semibold text-slate-100",
  accent: "font-semibold text-sky-300",
};

function RichText({
  parts,
  quote = false,
}: {
  parts: TextPart[];
  quote?: boolean;
}) {
  return (
    <>
      {parts.map((part, index) => {
        if (part.style === "normal") {
          return <span key={index}>{part.text}</span>;
        }

        const className = quote
          ? `${styleClassName[part.style]}${part.style === "strong" ? " not-italic" : ""}`
          : styleClassName[part.style];

        return (
          <span key={index} className={className}>
            {part.text}
          </span>
        );
      })}
    </>
  );
}

export default function AboutSection() {
  const { t } = useTranslation();
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
              {t.about.title}
            </h2>
            {t.about.paragraphs.map((parts, index) => (
              <p
                key={index}
                className={`text-lg text-slate-300 leading-relaxed ${
                  index === t.about.paragraphs.length - 1 ? "mb-6" : "mb-4"
                }`}
              >
                <RichText parts={parts as TextPart[]} />
              </p>
            ))}
            <p
              className="text-slate-300 leading-relaxed pl-4 border-l-2 border-sky-400/50 italic"
              style={{
                background:
                  "linear-gradient(90deg, rgba(56, 189, 248, 0.06) 0%, transparent 100%)",
              }}
            >
              <RichText parts={t.about.quote as TextPart[]} quote />
            </p>
          </div>

          {/* Picture in the right side */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-2xl transition-all duration-500 cursor-pointer hover:shadow-[0_0_50px_rgba(147,197,253,0.6),0_0_100px_rgba(96,165,250,0.3)] hover:scale-[1.02] overflow-hidden bg-slate-700/30">
              {imgError ? (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-5xl font-bold rounded-2xl">
                  {t.about.fallbackInitials}
                </div>
              ) : (
                <img
                  src="/images/profile/porfilePic.jpg"
                  alt={t.about.imageAlt}
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
