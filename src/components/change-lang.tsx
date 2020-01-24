import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

interface ChangeLangProps {}

export const ChangeLang: React.FC<ChangeLangProps> = props => {
  const activeLang = i18next.languages;
  console.log("i18next.language", i18next.languages);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "ka" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <React.Fragment>
      {"ka" === "ka" ? (
        <a href="#!" onClick={() => changeLanguage("ka")} className="lang">
          <img src="/assets/images/en.svg" alt="English" />
        </a>
      ) : (
        <a href="#!" onClick={() => changeLanguage("en")} className="lang">
          <img src="/assets/images/ka.svg" alt="Georgian" />
        </a>
      )}
    </React.Fragment>
  );
};
