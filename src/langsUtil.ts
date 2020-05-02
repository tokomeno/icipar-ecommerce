import i18n from "./langs/i18n";
import Axios from "axios";
import { axiosWithToken } from "./api/axios-with-token";

export const suportedLangs = {
  ka: "ka_GE",
  en: "en_US",
};

export const changeLanguage = (lng: "ka" | "en") => {
  localStorage.setItem("activeLang", lng);
  window.location.reload();
};

export const setDefaultLang = () => {
  let defaultLang = "ka";
  let langFromStorage = localStorage.getItem("activeLang");
  if (
    langFromStorage &&
    typeof langFromStorage === "string" &&
    suportedLangs.hasOwnProperty(langFromStorage)
  ) {
    i18n.changeLanguage(langFromStorage);
    defaultLang = langFromStorage;
  }
  setLangHeaders(defaultLang as "ka" | "en");
};

const setLangHeaders = (lng: "ka" | "en") => {
  Axios.defaults.headers["Accept-Language"] = suportedLangs[lng];
  axiosWithToken.defaults.headers["Accept-Language"] = suportedLangs[lng];
};
