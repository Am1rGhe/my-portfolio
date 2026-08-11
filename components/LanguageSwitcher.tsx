"use client";

import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div
      className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 p-0.5"
      role="group"
      aria-label={t.nav.language}
    >
      {locales.map((code: Locale) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
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
