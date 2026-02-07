'use client'

import { useMemo } from 'react'

interface BackgroundProps {
  className?: string
}

const STAR_COUNT = 120

export default function Background({ className = '' }: BackgroundProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1.5 + Math.random() * 2.5,
        delay: Math.random() * 4,
        duration: 1.5 + Math.random() * 2,
      })),
    []
  )

  return (
    <div
      className={`fixed inset-0 overflow-hidden bg-slate-900 ${className}`}
    >
      {/* animated twinkling stars */}
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
              boxShadow: '0 0 4px rgba(255,255,255,0.8)',
              animation: `starTwinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
