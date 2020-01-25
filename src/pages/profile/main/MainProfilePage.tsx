import React from "react";
import { ProfileBasePage } from "../index";
import { dummyProductData } from "../../../data/product";
import { Product } from "../../../components/product/product";
import { useTranslation } from "react-i18next";

interface ProfilePageProps {
  name?: string;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ name }) => {
  const { t } = useTranslation();
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side d-lg-block d-none">
        <div className="hello text-center">
          {t("hello")} <span className="name">{name}</span>
        </div>
        <div className="prof-grid d-flex justify-content-between">
          <a
            href="#!"
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="/assets/uploads/images/profgrid1.png"
              alt="bestsellers"
              className="grid-image"
            />
            <h2 className="title">ბესტსელერები</h2>
            <img
              src="/assets/images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </a>
          <a
            href="#!"
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="/assets/uploads/images/profgrid2.png"
              alt="news"
              className="grid-image"
            />
            <h2 className="title">სიახლეები</h2>
            <img
              src="/assets/images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </a>
          <a
            href="#!"
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="/assets/uploads/images/profgrid3.png"
              alt="blog"
              className="grid-image"
            />
            <h2 className="title">ბლოგი</h2>
            <img
              src="/assets/images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </a>
        </div>
        <div className="recomend-title text-center">რეკომენდაციები შენთვის</div>
        <div className="line" />
        <div className="menu d-flex justify-content-center align-items-center">
          <a href="#!" className="menu_link active">
            ყველა
          </a>
          <a href="#!" className="menu_link">
            სუნამოები
          </a>
          <a href="#!" className="menu_link">
            კანის მოვლა
          </a>
          <a href="#!" className="menu_link">
            მაკიაჟი
          </a>
          <a href="#!" className="menu_link">
            პარაფარმაცია
          </a>
        </div>
        <div>
          <div className="products d-flex flex-wrap">
            {dummyProductData.slice(1, 3).map(p => (
              <Product wrapperClass="product" product={p} />
            ))}
          </div>
        </div>
      </div>
      ;
    </ProfileBasePage>
  );
};
