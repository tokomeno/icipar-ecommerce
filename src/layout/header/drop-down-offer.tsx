import React from "react";
import { IDailyOffer, ILatestBlogPost } from "../../services/layout.http";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";

export const DropDownOffer: React.FC<{
  dailyOffer: IDailyOffer;
  latestBlogPost: ILatestBlogPost;
}> = ({ latestBlogPost, dailyOffer }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="suggestion left">
        <div className="title">{t("daily_offer")}</div>
        <NavLink
          to={routes.productShow(dailyOffer.product_id, dailyOffer.slug)}
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
          to={routes.blogShow(latestBlogPost.slug)}
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
    </>
  );
};
