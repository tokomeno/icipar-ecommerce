import React, { useState } from "react";
import { IProductWithItems } from "../../data/product";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

interface ProductContentProps {
  details: IProductWithItems["details"];
  brand: IProductWithItems["brand"];
}
type ITabNames = keyof IProductWithItems["details"] | "brand";

export const ProductContent: React.FC<ProductContentProps> = ({
  details,
  brand
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ITabNames>("description");

  if (typeof details !== "object" || typeof brand !== "object") return null;
  return (
    <div className="container">
      <div className="nav nav-tabs prod-menu d-flex justify-content-lg-center justify-content-start">
        <a
          className={classnames("prod-menu_link nav-link", {
            active: activeTab === "description"
          })}
          href="#!"
          onClick={e => {
            e.preventDefault();
            setActiveTab("description");
          }}
        >
          {t("product_description")}
        </a>
        <a
          className={classnames("prod-menu_link nav-link", {
            active: activeTab === "ingredients"
          })}
          onClick={e => {
            e.preventDefault();
            setActiveTab("ingredients");
          }}
          href="#!"
        >
          {t("ingredients")}
        </a>
        <a
          className={classnames("prod-menu_link nav-link", {
            active: activeTab === "usage"
          })}
          onClick={e => {
            e.preventDefault();
            setActiveTab("usage");
          }}
          href="#!"
        >
          {t("usage")}
        </a>

        <a
          className={classnames("prod-menu_link nav-link", {
            active: activeTab === "brand"
          })}
          onClick={e => {
            e.preventDefault();
            setActiveTab("brand");
          }}
          href="#!"
        >
          {t("about_brand")}
        </a>
      </div>
      <div className="menu_desc tab-content">
        <div className="txt-block tab-pane fade active show">
          <div className="d-flex flex-column align-items-center">
            <p className="txt text-center">
              {activeTab === "brand"
                ? brand["description"]
                : details[activeTab]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
