import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import ka from "./translations/ka.json";

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: en,
      ka: ka
    },
    lng: "ka",
    fallbackLng: "en",
    debug: true,
    nonExplicitWhitelist: true,
    load: "languageOnly",
    whitelist: ["ka", "en"],
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false // we use content as keys
  })
  .then(function(t) {
    console.log("initialized and ready to go!");
    // // initialized and ready to go!
    // console.log(i18n.t("hey"));
  })
  .catch(e => {
    console.log("localizations not initialaized");
  });

export default i18n;
