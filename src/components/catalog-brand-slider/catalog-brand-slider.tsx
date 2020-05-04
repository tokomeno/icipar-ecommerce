import React, { useState, useEffect, useContext } from "react";
import { BrandService, IBrandCatalogSlider } from "../../services/brand.http";
import { useTranslation } from "react-i18next";
import Swiper from "react-id-swiper";
import { DefaultSpinner } from "../spinners/spinner";
import { NavLink } from "react-router-dom";
import { PorductFilterContext } from "../../contexts/productFilterContext";
import { routes } from "../../routes/routes";

const params = {
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
interface CatalogBrandSliderProps {
  brand_id: number;
}

export const CatalogBrandSlider: React.FC<CatalogBrandSliderProps> = ({
  brand_id,
}) => {
  const { t } = useTranslation();
  const [brandSlider, setBrandSlider] = useState<IBrandCatalogSlider | null>(
    null
  );
  useEffect(() => {
    BrandService.getCatalogBrandSlider(brand_id)
      .then((res) => {
        setBrandSlider(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [brand_id]);
  const { setFilterGender } = useContext(PorductFilterContext);
  if (!brandSlider) return <DefaultSpinner />;
  return (
    <>
      <div>
        <h1 className="brand-title text-center">
          <img
            style={{ maxWidth: "300px" }}
            src={brandSlider.logo}
            alt={brandSlider.name}
            className="img-title"
          />
          <div className="d-none">{brandSlider.name}</div>
        </h1>
        <div
          className="brand-menu d-flex align-items-center justify-content-md-center justify-content-start "
          data-aos="fade-right"
        >
          <NavLink
            to={routes.brandShow(brandSlider.slug)}
            className="brand-menu_item"
          >
            {t("about_brand")}
          </NavLink>
          <a
            href="#!"
            onClick={() => setFilterGender("men")}
            className="brand-menu_item"
          >
            {t("mens_perfumes")}
          </a>
          <a
            href="#!"
            onClick={() => setFilterGender("women")}
            className="brand-menu_item"
          >
            {t("womens_perfumes")}
          </a>
          <NavLink
            to={routes.brandShow(brandSlider.slug)}
            className="brand-menu_item"
          >
            {t("brand_history")}
          </NavLink>
        </div>
        <div className="swiper-container ">
          <Swiper
            wrapperClass="swiper-wrapper"
            containerClass="swiper-container brand-slider"
            {...params}
          >
            {brandSlider.banners.map((banner, i) => (
              <div className="swiper-slide" key={i}>
                <div className="brand-banner">
                  <img src={banner} alt="chanel banner" />
                  <div className="bg" />
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
