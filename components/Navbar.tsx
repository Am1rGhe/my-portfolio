"use client";

import { useEffect, useState, useMemo } from "react";

const STAR_COUNT = 25;

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1.5 + Math.random() * 1.5,
        delay: Math.random() * 3,
        duration: 1.5 + Math.random() * 1.5,
      })),
    []
  );

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 64; 
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 overflow-hidden ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-slate-900/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-slate-900/50`}
    >
      {/* Animated stars layer */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: "0 0 4px rgba(255,255,255,0.8)",
              animation: `starTwinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-1">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "#about")}
              className="px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white transition-all duration-300 hover:[filter:drop-shadow(0_0_10px_rgba(255,255,255,0.9))] cursor-pointer"
            >
              About Me
            </a>
            <a
              href="#experience"
              onClick={(e) => handleLinkClick(e, "#experience")}
              className="px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white transition-all duration-300 hover:[filter:drop-shadow(0_0_10px_rgba(255,255,255,0.9))] cursor-pointer"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "#projects")}
              className="px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white transition-all duration-300 hover:[filter:drop-shadow(0_0_10px_rgba(255,255,255,0.9))] cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white transition-all duration-300 hover:[filter:drop-shadow(0_0_10px_rgba(255,255,255,0.9))] cursor-pointer"
            >
              Contact
            </a>
            <a
              href="#resume"
              onClick={(e) => handleLinkClick(e, "#resume")}
              className="px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white transition-all duration-300 hover:[filter:drop-shadow(0_0_10px_rgba(255,255,255,0.9))] cursor-pointer"
            >
              Resume/CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
