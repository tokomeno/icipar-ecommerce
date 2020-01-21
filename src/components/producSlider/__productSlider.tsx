import React, { ReactElement, useEffect } from "react";
import { Layout } from "../../layout";
import { IProductCetegory } from "../../data/categories";
import { ProductSliderItem } from "./productSliderItem";
import { IProduct } from "../../data/product";
import classNames from "classnames";

interface ProductSliderProps {
  products: IProduct[];
  title: string;
  showMoreNumber: number;
  menuCetegories: IProductCetegory[];
  initSlider: () => void;
  classes: {
    sectionClasses?: string[];
  };
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  showMoreNumber,
  menuCetegories,
  products,
  initSlider,
  classes
}) => {
  useEffect(() => {
    initSlider();
  }, [products, initSlider]);
  return (
    <section
      className={classNames("slider-section", classes.sectionClasses)}
      data-aos="fade-up"
    >
      <div className="slider-section-top">
        <div className=" d-flex align-items-center justify-content-sm-center justify-content-between xs-titlesblock">
          <h3 className="slider-section-top_title section-title">{title}</h3>
          <a href="#!" className="slider-section-top_link">
            <span>/</span>მეტის ნახვა ({showMoreNumber})
          </a>
        </div>
        <div className="line" />
        <div className="menu d-flex justify-content-center align-items-center">
          {menuCetegories.map(i => (
            <a href="#!" className="menu_link">
              {i.title}
            </a>
          ))}
        </div>
      </div>
      <div className="slider news-slide">
        <div className="container">
          <div className="swiper-container newsslider">
            <div className="swiper-wrapper">
              {products.map(product => (
                <ProductSliderItem product={product} />
              ))}
            </div>
          </div>
        </div>
        {/* Add Arrows */}
        <div className="swiper-button-next d-flex align-items-center justify-content-center">
          <i className="fas fa-angle-right" />
        </div>
        <div className="swiper-button-prev d-flex align-items-center justify-content-center">
          <i className="fas fa-angle-left" />
        </div>
      </div>
    </section>
  );
};
