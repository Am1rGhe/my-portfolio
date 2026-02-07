"use client";

import { useState } from "react";
import { contactLinks } from "@/lib/contactData";

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function getIcon(icon: ContactLink["icon"]) {
  const iconClass = "w-6 h-6 flex-shrink-0";
  switch (icon) {
    case "email": return <EmailIcon className={iconClass} />;
    case "github": return <GithubIcon className={iconClass} />;
    case "linkedin": return <LinkedInIcon className={iconClass} />;
    case "twitter": return <TwitterIcon className={iconClass} />;
  }
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (email: string) => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 50%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get in Touch
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            I&apos;m always open to new opportunities and interesting conversations. Feel free to reach out.
          </p>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {contactLinks.map((link) => {
              const isEmail = link.href.startsWith("mailto:");
              const emailAddress = isEmail ? link.href.replace("mailto:", "") : "";

              if (isEmail) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleCopyEmail(emailAddress)}
                    className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-800/60 border border-slate-600/50 text-slate-200 font-medium transition-all duration-300 hover:border-sky-500/50 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] cursor-pointer relative z-10"
                  >
                    {getIcon(link.icon)}
                    <span className="text-sm sm:text-base">{copied ? "Copied" : emailAddress}</span>
                  </button>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-800/60 border border-slate-600/50 text-slate-200 font-medium transition-all duration-300 hover:border-sky-500/50 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] cursor-pointer relative z-10"
                >
                  {getIcon(link.icon)}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Decorative line */}
          <div
            className="mt-12 mx-auto w-24 h-0.5 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(147, 197, 253, 0.5), transparent)" }}
          />
          <p className="mt-6 text-slate-500 text-sm">Let&apos;s connect</p>
        </div>
      </div>
    </section>
  );
}
