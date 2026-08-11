"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const currentLocale = (locales as readonly string[]).includes(segments[1] ?? "")
    ? (segments[1] as Locale)
    : null;

  const switchLocale = (next: Locale) => {
    if (!currentLocale || currentLocale === next) return;

    const rest = segments.slice(2).join("/");
    const nextPath = rest ? `/${next}/${rest}` : `/${next}`;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${nextPath}${hash}`);
  };

  return (
    <div
      className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 p-0.5"
      role="group"
      aria-label={t.nav.language}
    >
      {locales.map((code: Locale) => {
        const isActive = currentLocale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLocale(code)}
            className={`px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
              isActive
                ? "rounded-md bg-white/15 text-white"
                : "text-white/60 hover:text-white"
            }`}
            aria-pressed={isActive}
          >
            {localeLabels[code]}
          </button>
        );
      })}
    </div>
  );
}
