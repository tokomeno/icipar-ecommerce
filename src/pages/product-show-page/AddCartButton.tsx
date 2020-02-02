import React from "react";
import { IProductWithItems } from "../../data/product";
import { useTranslation } from "react-i18next";
import { useCounter } from "../../hooks/common/useCounter";

interface AddCartButtonProps {
  activeItem: IProductWithItems["items"][number];
}

export const AddCartButton: React.FC<AddCartButtonProps> = ({ activeItem }) => {
  const { t } = useTranslation();
  const { counter: productQnty, decrease, increase } = useCounter(1, 1);
  return (
    <div className="price-block d-flex align-items-center justify-content-sm-start justify-content-center">
      <div className="price-cont">
        <div className="price">
          {activeItem.price}
          <sub>D</sub>
        </div>
        {/* "card-owner" კლასი დაამატეთ "sale" კლასს */}
        {/* <div className="sale-cont d-flex align-items-center">
          <div className="sale">
            -70%
            <div className="hover">
              ფასდაკლებას იღებთ <br />
              ფასდაკლების ბარათის გამო
            </div>
          </div>
          <div className="old-price">
            110
            <sub>D</sub>
          </div>
        </div> */}
      </div>
      <div className="quantity d-flex flex-column align-items-center">
        <span onClick={increase} className="plus">
          <i className="fas fa-chevron-up" />
        </span>
        <span className="qty">
          <input readOnly type="number" value={productQnty} />
        </span>
        <span onClick={decrease} className="min">
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <a
        onClick={() => {
          console.log("add to cart");
        }}
        href="#!"
        className="buy d-flex"
      >
        {t("cart")}
        <img src="/assets/images/arrow-right.svg" alt="arrow" />
        <img
          src="/assets/images/arrow-right_red.svg"
          alt="arrow"
          className="red"
        />
      </a>
    </div>
  );
};
