import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

function getPreferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, qValue] = part.trim().split(";q=");
      return {
        lang: tag.split("-")[0]?.toLowerCase() ?? "",
        q: qValue ? Number(qValue) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of preferred) {
    if (isLocale(lang)) return lang;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);

  // Unknown short locale prefix (e.g. /de) → preferred/default home
  if (first && /^[a-z]{2}$/i.test(first) && !isLocale(first)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip static assets, API, and Next internals
    "/((?!_next|api|favicon\\.svg|images|cv|.*\\..*).*)",
  ],
};
