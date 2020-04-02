import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { IStoreState } from "../redux/mainReducer";

interface InstagramHomeProps {
  socials: IStoreState["info"]["socials"];
}

export const _InstagramHome: React.FC<InstagramHomeProps> = ({ socials }) => {
  const instagram = socials.find(i => i.social === "instagram");
  const { t } = useTranslation();

  return (
    <>
      <div className="container" data-aos-r="fade-down">
        <div className="insta text-center">
          <img src="/assets/images/insta.svg" alt="instagram" />
          <div className="insta-block">
            <div className="bg d-block d-md-none" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={instagram ? instagram.link : "#!"}
              className="insta-block_btn"
            >
              {t("folow_on_instargam")}
            </a>
          </div>
        </div>
      </div>
      <div className="stores" />
    </>
  );
};

const mapStateToProps = ({ info }: IStoreState) => ({
  socials: info.socials
});
export const InstagramHome = connect(mapStateToProps)(_InstagramHome);
