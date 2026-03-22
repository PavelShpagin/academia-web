"use client";
import { useState, useCallback } from "react";
import { Lang } from "./i18n";

export function useLang(initialLang: Lang): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.cookie = `lang=${l};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
  }, []);

  return [lang, setLang];
}
