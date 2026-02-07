'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface BackgroundProps {
  className?: string
}


export default function Background({ className = '' }: BackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<HTMLDivElement>(null)
  const wavesRef = useRef<HTMLDivElement>(null)
  const orbsRef = useRef<HTMLDivElement>(null)
  const sparklesRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLDivElement>(null)
  const lightRaysRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (!particlesRef.current || !shapesRef.current || !wavesRef.current || 
          !orbsRef.current || !sparklesRef.current || !linesRef.current || !lightRaysRef.current) return

      const particles = particlesRef.current.children
      const shapes = shapesRef.current.children
      const waves = wavesRef.current.children
      const orbs = orbsRef.current.children
      const sparkles = sparklesRef.current.children
      const lines = linesRef.current.children
      const lightRays = lightRaysRef.current.children

      Array.from(particles).forEach((particle, index) => {
        const delay = index * 0.5
        const duration = 20 + Math.random() * 15 
        const distance = 40 + Math.random() * 30

        gsap.to(particle, {
          y: `+=${distance}`,
          x: `+=${distance * 0.3}`,
          duration: duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay
        })

        gsap.to(particle, {
          opacity: 0.2 + Math.random() * 0.15,
          duration: 6 + Math.random() * 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay * 0.3
        })
      })
      Array.from(shapes).forEach((shape, index) => {
        const delay = index * 0.8
        const rotationSpeed = 60 + Math.random() * 40

        gsap.to(shape, {
          rotation: 360,
          duration: rotationSpeed,
          ease: "none",
          repeat: -1
        })

        gsap.to(shape, {
          y: `+=${30 + Math.random() * 20}`,
          x: `+=${20 + Math.random() * 15}`,
          duration: 15 + Math.random() * 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay
        })

        // subtle scale pulse
        gsap.to(shape, {
          scale: 1 + (Math.random() - 0.5) * 0.1,
          duration: 8 + Math.random() * 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay * 0.5
        })
      })

      // wave animations
      Array.from(waves).forEach((wave, index) => {
        gsap.to(wave, {
          x: "+=100",
          duration: 25 + Math.random() * 15,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 2
        })

        gsap.to(wave, {
          opacity: 0.08 + Math.sin(index) * 0.03,
          duration: 10 + Math.random() * 5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 1.5
        })
      })

      // floating orbs
      Array.from(orbs).forEach((orb, index) => {
        const delay = index * 1.2
        const duration = 15 + Math.random() * 10
        const distance = 80 + Math.random() * 60

        // circular/curved movement 
        gsap.to(orb, {
          x: `+=${distance}`,
          y: `+=${distance * 0.6}`,
          duration: duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay
        })

        // scale pulse
        gsap.to(orb, {
          scale: 1.2 + Math.random() * 0.3,
          duration: 4 + Math.random() * 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay * 0.5
        })

        // opacity pulse
        gsap.to(orb, {
          opacity: 0.3 + Math.random() * 0.2,
          duration: 3 + Math.random() * 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay * 0.3
        })
      })

      // sparkles 
      Array.from(sparkles).forEach((sparkle, index) => {
        const delay = index * 0.3

        gsap.to(sparkle, {
          opacity: 0.8,
          scale: 1.5,
          duration: 0.8 + Math.random() * 0.4,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay
        })

        // rotation
        gsap.to(sparkle, {
          rotation: 360,
          duration: 2 + Math.random() * 1,
          ease: "none",
          repeat: -1,
          delay: delay
        })

        gsap.to(sparkle, {
          y: `+=${20 + Math.random() * 15}`,
          x: `+=${10 + Math.random() * 10}`,
          duration: 8 + Math.random() * 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay
        })
      })

      Array.from(lines).forEach((line, index) => {
        const delay = index * 0.5

        // Draw animation
        gsap.fromTo(line, 
          { strokeDashoffset: 200 },
          {
            strokeDashoffset: 0,
            duration: 3 + Math.random() * 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            delay: delay
          }
        )

        // Opacity pulse
        gsap.to(line, {
          opacity: 0.15 + Math.random() * 0.1,
          duration: 4 + Math.random() * 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay * 0.7
        })
      })

      // Light rays
      Array.from(lightRays).forEach((ray, index) => {
        const delay = index * 1.5

        // Rotation
        gsap.to(ray, {
          rotation: 360,
          duration: 30 + Math.random() * 20,
          ease: "none",
          repeat: -1,
          delay: delay
        })

        // Opacity pulse
        gsap.to(ray, {
          opacity: 0.08 + Math.random() * 0.05,
          duration: 5 + Math.random() * 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: delay * 0.4
        })
      })
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Generate particles
  const generateParticles = () => {
    const particles = []
    for (let i = 0; i < 35; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3
      })
    }
    return particles
  }

  // Generate floating orbs
  const generateOrbs = () => {
    const orbs = []
    for (let i = 0; i < 6; i++) {
      orbs.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 60 + Math.random() * 80
      })
    }
    return orbs
  }

  // Generate sparkles
  const generateSparkles = () => {
    const sparkles = []
    for (let i = 0; i < 15; i++) {
      sparkles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 4
      })
    }
    return sparkles
  }

  // Generate connecting lines
  const generateLines = () => {
    const lines = []
    for (let i = 0; i < 5; i++) {
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      lines.push({
        id: i,
        startX,
        startY,
        endX: startX + (Math.random() - 0.5) * 30,
        endY: startY + (Math.random() - 0.5) * 30
      })
    }
    return lines
  }

  // Generate geometric shapes
  const generateShapes = () => {
    const shapes = []
    const types = ['circle', 'square', 'triangle']
    for (let i = 0; i < 8; i++) {
      shapes.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 40 + Math.random() * 60,
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * 360
      })
    }
    return shapes
  }

  const particles = generateParticles()
  const shapes = generateShapes()
  const orbs = generateOrbs()
  const sparkles = generateSparkles()
  const lines = generateLines()

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 25%, #1d4ed8 50%, #60a5fa 75%, #93c5fd 100%)',
        backgroundSize: '400% 400%'
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 25%, #1d4ed8 50%, #60a5fa 75%, #93c5fd 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite'
        }}
      />

      {/* Subtle waves */}
      <div ref={wavesRef} className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-32 opacity-10"
            style={{
              top: `${30 + i * 20}%`,
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
              borderRadius: '50%',
              filter: 'blur(40px)',
              transform: `translateY(${i * 10}px)`
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div ref={shapesRef} className="absolute inset-0">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute opacity-5"
            style={{
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              transform: `rotate(${shape.rotation}deg)`
            }}
          >
            {shape.type === 'circle' && (
              <div className="w-full h-full rounded-full border-2 border-white/30" />
            )}
            {shape.type === 'square' && (
              <div className="w-full h-full border-2 border-white/30" style={{ transform: 'rotate(45deg)' }} />
            )}
            {shape.type === 'triangle' && (
              <div
                className="w-full h-full"
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-300/40"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.size * 4}px rgba(96, 165, 250, 0.5)`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Floating orbs - larger glowing balls */}
      <div ref={orbsRef} className="absolute inset-0">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full bg-blue-400/30"
            style={{
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              boxShadow: `0 0 ${orb.size * 2}px rgba(96, 165, 250, 0.6)`,
              filter: 'blur(8px)'
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      <div ref={sparklesRef} className="absolute inset-0">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }}
            />
          </div>
        ))}
      </div>

      {/* animated paths */}
      <div ref={linesRef} className="absolute inset-0">
        <svg className="w-full h-full" style={{ opacity: 0.1 }}>
          {lines.map((line) => (
            <line
              key={line.id}
              x1={`${line.startX}%`}
              y1={`${line.startY}%`}
              x2={`${line.endX}%`}
              y2={`${line.endY}%`}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
              style={{ strokeDashoffset: 200 }}
            />
          ))}
        </svg>
      </div>

      {/* Light rays  */}
      <div ref={lightRaysRef} className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: '10%',
              width: '2px',
              height: '40%',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
              transformOrigin: 'top center',
              transform: `rotate(${i * 30}deg)`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
        }}
      />

      {/* dark overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'
        }}
      />
    </div>
  )
}
