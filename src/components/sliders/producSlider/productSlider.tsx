import React from "react";
import classNames from "classnames";
import Swiper from "react-id-swiper";
import { IProduct } from "../../../data/product";
import { IProductCetegory } from "../../../data/categories";
import { useSliderNav } from "../../../hooks/common/useSliderNav";
import { Product } from "../../product/product";
import { SwiperCustomNavBtn } from "../../swiper/swiper-custom-nav-btn";

interface ProductSliderProps {
  products: IProduct[];
  title: string;
  showMoreNumber: number;
  menuCetegories: IProductCetegory[];
  classes: {
    sectionClasses?: string[];
  };
  isHot?: boolean;
}

const params = {
  slidesPerView: 5,
  spaceBetween: 60,
  renderPrevButton: () => null,
  renderNextButton: () => null,
  breakpoints: {
    1799: {
      spaceBetween: 30
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    767: {
      slidesPerView: 2
    },
    575: {
      slidesPerView: 1.5
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20
    }
  }
};

export const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  showMoreNumber,
  menuCetegories,
  products,
  classes,
  isHot
}) => {
  const { sliderNav, currentSliderIndex } = useSliderNav(products.length, 0);

  console.log(currentSliderIndex.toString());
  return (
    <section
      className={classNames("slider-section", classes.sectionClasses)}
      data-aos-off="fade-up"
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
            <a href="#!" key={i.id} className="menu_link">
              {i.title}
            </a>
          ))}
        </div>
      </div>
      <div className="slider news-slide">
        <div className="container">
          <Swiper activeSlideKey={currentSliderIndex.toString()} {...params}>
            {products.map((product, index) => (
              <Product
                wrapperClass={"swiper-slide"}
                key={index}
                product={product}
                isHot={isHot}
              />
            ))}
          </Swiper>
        </div>
        {/* Add Arrows */}
        <SwiperCustomNavBtn sliderNav={sliderNav} />
      </div>
    </section>
  );
};
