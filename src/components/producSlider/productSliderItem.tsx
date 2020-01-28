import React from "react";
import { IProduct } from "../../data/product";

interface ProductSliderItemProps {
  product: IProduct;
}

export const ProductSliderItem: React.FC<ProductSliderItemProps> = ({
  product
}) => {
  return (
    <div className="swiper-slide">
      <div className="image">
        <a href="#!" className="img">
          <img src={product.thumbnail} alt="photo1" />
        </a>
        <div className="option d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="rating">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
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
      <a href="#!" className="news_link">
        {product.title}
      </a>
      <div className="price">
        {product.price}
        <sub>D</sub>
      </div>
    </div>
  );
};
