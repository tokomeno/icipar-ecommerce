import React, { useEffect, useState, useCallback } from "react";
import { ProfileBasePage } from "../index";
// import { dummyProductData } from "../../../data/product";
// import { Product } from "../../../components/product/product";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { NavHashLink } from "react-router-hash-link";
import { AuthService, MyRecomendations } from "../../../services/auth.http";
import { IProduct } from "../../../services/product.http";
import { Product } from "../../../components/product/product";
import classnames from "classnames";

interface ProfilePageProps {
  name?: string;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ name }) => {
  const { t } = useTranslation();

  const [allProducts, setAllProducts] = useState<MyRecomendations[]>([]);

  const [categories, setCategories] = useState<{ id: number; title: string }[]>(
    []
  );

  const [products, setProducts] = useState<IProduct[]>([]);

  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  const setActiveTab = useCallback(
    (category_id: number) => {
      const p = allProducts.find((item) => item.category_id === category_id);
      if (!p) return;
      setProducts(p.products);
      setActiveTabId(p.category_id);
    },
    [allProducts, setProducts, setActiveTabId]
  );

  useEffect(() => {
    AuthService.myRecomendation()
      .then((res) => {
        setAllProducts(res.data.data);
        setCategories(
          res.data.data.map((item) => ({
            title: item.category_title,
            id: item.category_id,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    if (allProducts.length) {
      setActiveTab(allProducts[0].category_id);
    }
  }, [allProducts, setActiveTab]);
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side d-lg-block d-none">
        <div className="hello text-center">
          {t("hello")} <span className="name">{name}</span>
        </div>
        <div className="prof-grid d-flex justify-content-between">
          <NavHashLink
            to={routes.home + "#bestsellerslider"}
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="/assets/uploads/images/profgrid1.png"
              alt="bestsellers"
              className="grid-image"
            />
            <h2 className="title">{t("bestsellers")}</h2>
            <img
              src="/assets/images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </NavHashLink>
          <NavHashLink
            to={routes.home + "#news__slide"}
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="/assets/uploads/images/profgrid2.png"
              alt="news"
              className="grid-image"
            />
            <h2 className="title">{t("news")}</h2>
            <img
              src="/assets/images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </NavHashLink>
          <NavLink
            to={routes.blogs}
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="/assets/uploads/images/profgrid3.png"
              alt="blog"
              className="grid-image"
            />
            <h2 className="title">{t("blog")}</h2>
            <img
              src="/assets/images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </NavLink>
        </div>
        <div className="recomend-title text-center">რეკომენდაციები შენთვის</div>
        <div className="line" />
        <div className="menu d-flex justify-content-center align-items-center">
          {categories.map((i) => (
            <a
              key={i.id}
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(i.id);
              }}
              className={classnames("menu_link", {
                active: i.id === activeTabId,
              })}
            >
              {i.title}
            </a>
          ))}
        </div>
        <div>
          <div className="products d-flex flex-wrap">
            {products.map((p) => (
              <Product
                displayLables={true}
                key={p.id}
                wrapperClass="product"
                product={p}
              />
            ))}
          </div>
        </div>
      </div>
    </ProfileBasePage>
  );
};
