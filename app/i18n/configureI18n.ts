import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { getLocales } from "expo-localization";

import resources from "./locales";

export default function configureI18n() {
  const lang = getLocales()[0].languageCode;

  i18next.use(initReactI18next).init(
    {
      resources,
      lng: lang ?? undefined,
      fallbackLng: "en",
      keySeparator: false,
      nsSeparator: "::",
      compatibilityJSON: "v4",
      debug: false,
      interpolation: {
        escapeValue: false,
      },
    },
    (err, t) => {
      if (err) {
        console.error("i18next initialization error:", err);
      } else {
        console.log("i18next initialized successfully");
      }
    }
  );

  return i18next;
}
