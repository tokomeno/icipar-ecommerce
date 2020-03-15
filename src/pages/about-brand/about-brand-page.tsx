import React, { useState, useEffect } from "react";
import { match } from "react-router-dom";
import { BrandService, IBrandShow } from "../../services/brand.http";
import { LayoutSpinner } from "../../components/spinners/layout-spinner";
import { useTranslation } from "react-i18next";

interface AboutBrandPageProps {
  match: match<{ slug: string }>;
}

export const AboutBrandPage: React.FC<AboutBrandPageProps> = ({ match }) => {
  const { t } = useTranslation();
  const [brand, setBrand] = useState<IBrandShow | null>(null);
  useEffect(() => {
    BrandService.getBySlug(match.params.slug).then(res =>
      setBrand(res.data.data)
    );
  }, [match.params.slug]);
  if (!brand) return <LayoutSpinner />;
  return (
    <>
      <div className="container">
        <div className="about-brand">
          <h1 className="brand-title text-center">
            <img
              src="/assets/uploads/images/chanel.png"
              alt="chanel"
              className="img-title"
            />
            <div className="d-none">{brand.name}</div>
          </h1>
          <div className="swiper-container brand-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-banner">
                  <img src={brand.banner} alt="chanel banner" />
                  <div className="bg" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-banner">
                  <img src={brand.banner} alt="chanel banner" />
                  <div className="bg" />
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>

          <div className="d-flex flex-column align-items-center">
            <h2 className="title">{t("brand_history")}</h2>
            <p className="txt text-center">
              ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
              ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად აფასებენ
              ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების სურნელებათა
              თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო განკუთვნილია
              როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
            </p>
            <div
              className="about-brand_content"
              dangerouslySetInnerHTML={{ __html: brand.body }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
