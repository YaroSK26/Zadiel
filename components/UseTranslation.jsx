"use client"
import { useEffect, useState } from "react";


export const useTranslations = () => {
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadTranslations = async () => {
        try {
          const language = localStorage.getItem("language") || "sk";
          const response = await fetch(`/locales/${language}.json`);
          const data = await response.json();
          setTranslations(data);
        } catch (err) {
          console.error("Error loading translations:", err);
        }
      };

      loadTranslations();

      const handleLanguageChange = (event) => {
        if (event.detail && event.detail.translations) {
          setTranslations(event.detail.translations);
        }
      };

      window.addEventListener("languageChange", handleLanguageChange);
      return () =>
        window.removeEventListener("languageChange", handleLanguageChange);
    }
  }, []);

  return translations;
};
