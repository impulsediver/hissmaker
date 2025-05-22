import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";
import en from "./locales/en.json";
import ko from "./locales/ko.json";

/** 사용자의 locale 정보 */
const userLocales = getLocales();

/** i18n 정보를 설정합니다. */
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ko: { translation: ko },
  },
  // 유저의 기본 언어를 사용하되, 없다면 en을 사용합니다.
  lng: userLocales.length > 0 ? userLocales[0].languageCode : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
