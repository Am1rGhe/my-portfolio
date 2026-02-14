"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [showMeteor, setShowMeteor] = useState(false);
  const [meteorKey, setMeteorKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const checkAndTriggerMeteor = () => {
      const section = sectionRef.current;
      if (!section || hasTriggeredRef.current) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      if (
        sectionTop < viewportHeight * 0.7 &&
        sectionBottom > viewportHeight * 0.2
      ) {
        hasTriggeredRef.current = true;
        setShowMeteor(true);
        setMeteorKey((k) => k + 1);

        setTimeout(() => {
          hasTriggeredRef.current = false;
        }, 4000);
      }
    };

    const initialCheck = setTimeout(checkAndTriggerMeteor, 300);
    window.addEventListener("scroll", checkAndTriggerMeteor, { passive: true });
    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener("scroll", checkAndTriggerMeteor);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Meteor */}
      {showMeteor && (
        <div
          key={meteorKey}
          className="fixed inset-0 pointer-events-none z-[100] overflow-hidden"
        >
          <div
            className="absolute origin-center"
            style={{
              top: "25%",
              left: "105%",
              width: "180px",
              animation: "meteorShoot 1.6s ease-out forwards",
            }}
          >
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white"
              style={{
                boxShadow:
                  "0 0 16px 8px rgba(255,255,255,0.95), 0 0 32px 16px rgba(200,220,255,0.6)",
              }}
            />
            <div
              className="absolute left-4 top-1/2 -translate-y-1/2 h-1.5 w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, transparent 100%)",
                filter: "blur(1px)",
              }}
            />
          </div>
        </div>
      )}

      <div className="text-center relative z-10 px-4">
        <p
          className="text-base sm:text-xl md:text-2xl mb-6 tracking-[0.15em] sm:tracking-[0.2em] uppercase font-light"
          style={{
            background: "linear-gradient(90deg, #94a3b8, #e2e8f0, #93c5fd)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradientTextShift 4s ease-in-out infinite",
          }}
        >
          Welcome to my website
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
          style={{
            background:
              "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation:
              "gradientTextShift 6s ease-in-out infinite, textGlow 3s ease-in-out infinite",
          }}
        >
          Amir Ghouari
        </h1>
      </div>
    </section>
  );
}
