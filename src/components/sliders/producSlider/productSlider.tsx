import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Swiper from "react-id-swiper";
import { useSliderNav } from "../../../hooks/common/useSliderNav";
import { Product } from "../../product/product";
import { SwiperCustomNavBtn } from "../../swiper/swiper-custom-nav-btn";
import { axiosWithToken } from "../../../api/axios-with-token";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../../services/product.http";
import { DefaultSpinner } from "../../spinners/spinner";
import { routes } from "../../../routes/routes";

interface ProductSliderProps {
  fetchUrl?: string;
  title: string;
  showMoreNumber: number;
  classes: {
    sectionClasses?: string[];
  };
  isHot?: boolean;
  sectionId?: string;
}

const params = {
  slidesPerView: 5,
  spaceBetween: 60,
  renderPrevButton: () => null,
  renderNextButton: () => null,
  breakpoints: {
    1799: {
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
  observer: true,
};

interface IProductByCateogry {
  category_id: number;
  category_title: string;
  products: IProduct[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  showMoreNumber,
  classes,
  isHot,
  fetchUrl,
  sectionId,
}) => {
  const { t } = useTranslation();
  const [productByCategory, setProductByCategory] = useState<
    IProductByCateogry[]
  >([]);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  const setActiveTab = (category_id: number) => {
    const p = productByCategory.find(
      (item) => item.category_id === category_id
    );
    if (!p) return;
    setProducts(p.products);
    setActiveTabId(p.category_id);
  };

  useEffect(() => {
    if (!fetchUrl) return;
    axiosWithToken
      .get<{ data: IProductByCateogry[] }>(fetchUrl)
      .then((res) => {
        const { data } = res.data;
        setProductByCategory(data);
        setActiveTabId(data[0].category_id);
        setProducts(data[0].products);
      })
      .catch((err) => console.log(err));
  }, [fetchUrl]);

  const { sliderNav, currentSliderIndex } = useSliderNav(products.length, 0);

  const loader = (
    <section
      id={sectionId}
      className={classnames("slider-section", classes.sectionClasses)}
      data-aos-off="fade-up"
    >
      <div className="slider-section-top">
        <div className=" d-flex align-items-center justify-content-sm-center justify-content-between xs-titlesblock">
          <h3 className="slider-section-top_title section-title">{title}</h3>
        </div>
        <div className="line" />
      </div>
      <div className="slider news-slide">
        <DefaultSpinner />
      </div>
    </section>
  );

  if (!activeTabId) return loader;

  return (
    <section
      id={sectionId}
      className={classnames("slider-section", classes.sectionClasses)}
      data-aos-off="fade-up"
    >
      <div className="slider-section-top">
        <div className=" d-flex align-items-center justify-content-sm-center justify-content-between xs-titlesblock">
          <h3 className="slider-section-top_title section-title">{title}</h3>
          <NavLink to={routes.catalog} className="slider-section-top_link">
            <span>/</span>
            {t("show_more")}
            {/* ({showMoreNumber}) */}
          </NavLink>
        </div>
        <div className="line" />
        <div className="menu d-flex justify-content-center align-items-center">
          {productByCategory.map((i) => (
            <a
              href="#!"
              key={i.category_id}
              className={classnames("menu_link", {
                active: i.category_id === activeTabId,
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(i.category_id);
              }}
            >
              {i.category_title}
            </a>
          ))}
        </div>
      </div>
      <div className="slider news-slide">
        <div className="container">
          <Swiper
            // shouldSwiperUpdate
            activeSlideKey={currentSliderIndex.toString()}
            {...params}
          >
            {products.map((product, index) => (
              <Product
                wrapperClass={"swiper-slide"}
                key={product.id}
                product={product}
                isHot={isHot}
              />
            ))}
          </Swiper>
        </div>
        <SwiperCustomNavBtn sliderNav={sliderNav} />
      </div>
    </section>
  );
};
