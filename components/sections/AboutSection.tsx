"use client";

import { useEffect, useState, useRef } from "react";

export default function AboutSection() {
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

      // Trigger when section enters view (top is above 70% of viewport)
      if (sectionTop < viewportHeight * 0.7 && sectionBottom > viewportHeight * 0.2) {
        hasTriggeredRef.current = true;
        setShowMeteor(true);
        setMeteorKey((k) => k + 1);

        setTimeout(() => {
          hasTriggeredRef.current = false;
        }, 3000);
      }
    };

    // Check on mount (in case About is already visible)
    const initialCheck = setTimeout(checkAndTriggerMeteor, 100);

    window.addEventListener("scroll", checkAndTriggerMeteor, { passive: true });
    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener("scroll", checkAndTriggerMeteor);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Meteor - shoots across when section scrolls into view */}
      {showMeteor && (
        <div
          key={meteorKey}
          className="fixed inset-0 pointer-events-none z-[100] overflow-visible"
        >
          <div
            className="absolute origin-center"
            style={{
              top: "15%",
              left: "105%",
              width: "180px",
              animation: "meteorShoot 1.6s ease-out forwards",
            }}
          >
            {/* Meteor head - bright glowing dot */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white"
              style={{
                boxShadow: "0 0 16px 8px rgba(255,255,255,0.95), 0 0 32px 16px rgba(200,220,255,0.6)",
              }}
            />
            {/* Meteor tail */}
            <div
              className="absolute left-4 top-1/2 -translate-y-1/2 h-1.5 w-full"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, transparent 100%)",
                filter: "blur(1px)",
              }}
            />
          </div>
        </div>
      )}

      <div className="text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-lg text-white/90">This is the About section</p>
      </div>
    </section>
  );
}
