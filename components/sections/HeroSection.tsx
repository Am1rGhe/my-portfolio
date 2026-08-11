"use client";

import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/** Match CSS meteorShoot path: translate(-120vw, -80vh) */
const FLIGHT_DX_VW = -120;
const FLIGHT_DY_VH = -80;

function getFlightRotationDeg() {
  const dx = (FLIGHT_DX_VW / 100) * window.innerWidth;
  const dy = (FLIGHT_DY_VH / 100) * window.innerHeight;
  // Rocket art points up; mirror the path angle so the nose tracks the flight.
  return (-Math.atan2(-dx, -dy) * 180) / Math.PI;
}

export default function HeroSection() {
  const { t } = useTranslation();
  const [showRocket, setShowRocket] = useState(false);
  const [rocketKey, setRocketKey] = useState(0);
  const [flightRotation, setFlightRotation] = useState(45);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const updateRotation = () => setFlightRotation(getFlightRotationDeg());
    updateRotation();
    window.addEventListener("resize", updateRotation);
    return () => window.removeEventListener("resize", updateRotation);
  }, []);

  useEffect(() => {
    const checkAndTriggerRocket = () => {
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
        setFlightRotation(getFlightRotationDeg());
        setShowRocket(true);
        setRocketKey((k) => k + 1);

        setTimeout(() => {
          hasTriggeredRef.current = false;
        }, 4000);
      }
    };

    const initialCheck = setTimeout(checkAndTriggerRocket, 300);
    window.addEventListener("scroll", checkAndTriggerRocket, { passive: true });
    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener("scroll", checkAndTriggerRocket);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {showRocket && (
        <div
          key={rocketKey}
          className="fixed inset-0 pointer-events-none z-[100] overflow-hidden"
          aria-hidden
        >
          <div
            className="absolute"
            style={{
              top: "75%",
              left: "105%",
              width: "120px",
              height: "120px",
              animation: "meteorShoot 1.8s ease-out forwards",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: `rotate(${flightRotation}deg)`,
              }}
            >
              <DotLottieReact
                src="/animations/rocket.json"
                autoplay
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>
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
          {t.hero.welcome}
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
          {t.hero.name}
        </h1>
      </div>
    </section>
  );
}
