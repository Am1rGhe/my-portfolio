import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Providers from "@/components/Providers";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataByLocale: Record<
  Locale,
  { title: string; description: string }
> = {
  en: {
    title: "Amir Ghouari | Software Engineer",
    description:
      "Portfolio of Amir Ghouari — Software engineer and software engineering student at UQAM. Explore my projects, skills, and experience in web development.",
  },
  fr: {
    title: "Amir Ghouari | Ingénieur logiciel",
    description:
      "Portfolio d'Amir Ghouari — Ingénieur logiciel et étudiant en génie logiciel à l'UQAM. Découvrez mes projets, compétences et expériences en développement web.",
  },
};

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const meta = metadataByLocale[locale];

  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: "/favicon.svg",
    },
    alternates: {
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <html lang={localeParam} className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden max-w-full`}
      >
        <Providers locale={localeParam}>{children}</Providers>
      </body>
    </html>
  );
}
