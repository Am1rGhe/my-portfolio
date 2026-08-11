"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/** Flight distance as fractions of the viewport (same values used for path + angle). */
const FLIGHT_DX_RATIO = -1.2;
const FLIGHT_DY_RATIO = -0.8;
/** Extra tilt so the nose sits a bit more to the left of the flight path. */
const ROTATION_NUDGE_DEG = -20;

type RocketFlight = {
  dx: string;
  dy: string;
  rotation: number;
};

function getRocketFlight(): RocketFlight {
  const dxPx = FLIGHT_DX_RATIO * window.innerWidth;
  const dyPx = FLIGHT_DY_RATIO * window.innerHeight;
  // Rocket art points up; mirrored so the nose tracks this exact pixel path.
  const rotation =
    (-Math.atan2(-dxPx, -dyPx) * 180) / Math.PI + ROTATION_NUDGE_DEG;

  return {
    dx: `${dxPx}px`,
    dy: `${dyPx}px`,
    rotation,
  };
}

export default function HeroSection() {
  const { t } = useTranslation();
  const [showRocket, setShowRocket] = useState(false);
  const [rocketKey, setRocketKey] = useState(0);
  const [flight, setFlight] = useState<RocketFlight>({
    dx: "-120vw",
    dy: "-80vh",
    rotation: -45,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const updateFlight = () => setFlight(getRocketFlight());
    updateFlight();
    window.addEventListener("resize", updateFlight);
    return () => window.removeEventListener("resize", updateFlight);
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
        setFlight(getRocketFlight());
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

  const rocketTravelStyle = {
    top: "75%",
    left: "105%",
    width: "120px",
    height: "120px",
    animation: "meteorShoot 1.8s ease-out forwards",
    ["--rocket-dx" as string]: flight.dx,
    ["--rocket-dy" as string]: flight.dy,
  } as CSSProperties;

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
          <div className="absolute" style={rocketTravelStyle}>
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: `rotate(${flight.rotation}deg)`,
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
