import React from "react";
import {
  IMenuCatrogy,
  IDailyOffer,
  ILatestBlogPost
} from "../../services/layout.http";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ScrollArea from "react-scrollbar";

type HeaderMenuItemProps = {
  item: IMenuCatrogy;
  dailyOffer: IDailyOffer;
  latestBlogPost: ILatestBlogPost;
  // brands: IBrandSliderItem[];
};
export const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
  item,
  dailyOffer,
  latestBlogPost
}) => {
  const { t } = useTranslation();
  return (
    <div className="header-menu_item">
      <a href="#!" className="link">
        {item.title}
      </a>
      <div className="inner-menu">
        <div className="container">
          <div className="d-flex">
            <div className="inner-menu_block categories">
              <div className="title">{t("categories")}</div>
              <div className="items">
                <NavLink to="#!" className="items-link">
                  {t("man")}
                </NavLink>
                <NavLink to="#!" className="items-link">
                  {t("women")}
                </NavLink>
                <NavLink to="#!" className="items-link">
                  {t("news")}
                </NavLink>
              </div>
            </div>
            <div className="inner-menu_block categories">
              <div className="title">{t("brands")}</div>
              <ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}
              >
                {Object.keys(item.brands).map(brandLatter => (
                  <div className="items">
                    <div className="letter">{brandLatter}</div>
                    {item.brands[brandLatter].map(b => (
                      <NavLink
                        to={"/all-brands#" + brandLatter}
                        className="letter-link"
                      >
                        {b.name}
                      </NavLink>
                    ))}
                  </div>
                ))}
              </ScrollArea>
            </div>
            <div className="suggestion left">
              <div className="title">{t("daily_offer")}</div>
              <NavLink
                to={`/product/${dailyOffer.product_id}`}
                className="d-flex align-items-center flex-column"
              >
                <div className="image">
                  <img
                    style={{ maxHeight: "129px", maxWidth: "253px" }}
                    src={dailyOffer.thumbnail}
                    alt="suggestion"
                  />
                </div>
                <div className="prod-name">{dailyOffer.title}</div>
                <div className="price d-flex">
                  <div className="old-price">
                    <span>{dailyOffer.original_price}</span>
                    <sub>D</sub>
                  </div>
                  <div className="new-price">
                    {dailyOffer.discounted_price}
                    <sub>D</sub>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="suggestion">
              <div className="title">{t("blog_post")}</div>
              <NavLink
                to={`/blog/${latestBlogPost.slug}`}
                className="d-flex align-items-center flex-column"
              >
                <div className="image">
                  <img
                    style={{ maxHeight: "129px", maxWidth: "253px" }}
                    src={latestBlogPost.thumbnail}
                    alt="suggestion"
                  />
                </div>
                <div className="prod-name">{latestBlogPost.title}</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
