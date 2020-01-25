import React from "react";
import { useTranslation } from "react-i18next";

interface BundleProductProps {}

export const BundleProduct: React.FC<BundleProductProps> = props => {
  const { t } = useTranslation();
  return (
    <div className="bundle-prod">
      <h3 className="title text-center">{t("ertad_iafi")}</h3>
      <div className="bundle-prod_cont d-flex align-items-center justify-content-md-center justify-content-start">
        <div className="bundle-item d-flex flex-column align-items-center">
          <div className="image d-flex align-items-center justify-content-center">
            <img src="/assets/uploads/images/bundle1.png" alt="bundle" />
          </div>
          <div className="name">Calvin Klein All, 100ml</div>
          <div className="bundle-price d-flex">
            <div className="price old">
              110
              <sub>D</sub>
            </div>
            <div className="price">
              110
              <sub>D</sub>
            </div>
          </div>
        </div>
        <div className="plus">
          <img src="/assets/images/plus.png" alt="" />
        </div>
        <div className="bundle-item d-flex flex-column align-items-center">
          <div className="image d-flex align-items-center justify-content-center">
            <img src="/assets/uploads/images/bundle2.png" alt="bundle" />
          </div>
          <div className="name">Calvin Klein All, 100ml</div>
          <div className="bundle-price d-flex">
            <div className="price old">
              110
              <sub>D</sub>
            </div>
            <div className="price">
              110
              <sub>D</sub>
            </div>
          </div>
        </div>
        <div className="plus">
          <img src="/assets/images/plus.png" alt="" />
        </div>
        <div className="bundle-item d-flex flex-column align-items-center">
          <div className="image d-flex align-items-center justify-content-center">
            <img src="/assets/uploads/images/bundle3.png" alt="bundle" />
          </div>
          <div className="name">Calvin</div>
          <div className="bundle-price d-flex">
            <div className="price old">
              110
              <sub>D</sub>
            </div>
            <div className="price">
              110
              <sub>D</sub>
            </div>
          </div>
        </div>
        <div className="plus">
          <img src="/assets/images/equal.png" alt="" />
        </div>
        <div className="equal-block">
          <div className="sum">
            110
            <sub>D</sub>
          </div>
          <div className="sale-block d-flex">
            <div className="sale">-70%</div>
            <div className="old-sum">
              110
              <sub>D</sub>
            </div>
          </div>
          <a href="#!" className="bag-btn d-flex">
            {t("cart")}
            <img src="/assets/images/arrow-right.svg" alt="arrow" />
            <img
              src="/assets/images/arrow-right_red.svg"
              alt="arrow"
              className="red"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
