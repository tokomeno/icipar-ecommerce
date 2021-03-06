import React from "react";
import i18next from "i18next";
import { changeLanguage } from "../langsUtil";

interface ChangeLangProps {}

export const ChangeLang: React.FC<ChangeLangProps> = (props) => {
  const activeLang = i18next.languages ? i18next.languages[0] : "ka";

  return (
    <React.Fragment>
      {activeLang === "en" ? (
        <a
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("ka");
          }}
          className="lang"
        >
          <img
            style={{ width: "24px" }}
            src="/assets/images/ka.svg"
            alt="English"
          />
        </a>
      ) : (
        <a
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("en");
          }}
          className="lang"
        >
          <img
            style={{ width: "24px" }}
            src="/assets/images/en.svg"
            alt="Georgian"
          />
        </a>
      )}
    </React.Fragment>
  );
};
