import React from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../services/product.http";

interface ProductSliderItemProps {
  product: IProduct;
}

export const ProductSliderItem: React.FC<ProductSliderItemProps> = ({
  product,
}) => {
  return (
    <div className="swiper-slide">
      <div className="image">
        <NavLink className="img" to={`/product/${product.id}`}>
          <img src={product.thumbnail} alt="photo1" />
        </NavLink>
        <div className="option d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="rating">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  className={classnames("fa fa-star", {
                    checked: i < product.rating,
                  })}
                />
              ))}
            </div>
            <span className="rateNum">(123)</span>
          </div>
          <div className="d-flex">
            <button className="heart">
              <img src="/assets/images/heart-dark.svg" alt="favorite" />
              <img
                src="/assets/images/loved.svg"
                alt="favorite"
                className="added"
              />
            </button>
            <button className="cart">
              <img src="/assets/images/bag-dark.svg" alt="cart" />
              <div className="qty">
                <span className="num">{product.qty}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <NavLink to={`/product/${product.id}`} className="news_link">
        {product.title}
      </NavLink>
      <div className="price">
        {product.price}
        <sub>D</sub>
      </div>
    </div>
  );
};
