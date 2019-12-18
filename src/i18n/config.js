import i18next from "i18next"

import LanguageDetector from "i18next-browser-languagedetector"

i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  resources: {
    en: {
      translations: require("../locales/en/translations.json"),
    },
    ko: {
      translations: require("../locales/ko/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["en", "ko"]

export default i18next
