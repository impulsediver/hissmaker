import i18n from "./i18n";
import { useTranslation } from "react-i18next";

export type LangauageCode = "en" | "ko";

export const LANGUAGES: { code: LangauageCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
];

//! useLanguage() 훅은 조건부 랜더링에 영향 받지 않기 위하여 무조건 함수 최상단에 정의해야 합니다.
/** */
export function useLanguage() {
  const { t } = useTranslation();

  const currentLanguage = i18n.language;

  /** */
  function setLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  /**  */
  function getLocalizedText(path: string) {
    return t(path);
  }

  return { currentLanguage, setLanguage, getLocalizedText };
}
