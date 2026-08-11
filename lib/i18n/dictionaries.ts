import type { Locale } from "./config";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

const dictionaries = {
  en,
  fr,
} as const;

export type Messages = typeof en;

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale];
}
