import React from "react";
import classnames from "classnames";
import { IProduct } from "../../data/product";
import { ProductRaiting } from "./product-raiting";
import { ProductCartBtn } from "./product-cart-btn";
import { ProductHeartBtn } from "./product-heart-btn";

interface ProductProps {
  product: IProduct;
  wrapperClass: "catalog-item" | "swiper-slide";
}

export const Product: React.FC<ProductProps> = ({ wrapperClass, product }) => {
  return (
    <React.Fragment>
      <div className={wrapperClass}>
        <div className="image">
          <a href="#!" className="img">
            <img src={product.image} alt="" />
          </a>
          <div className="option d-flex justify-content-between align-items-center">
            <ProductRaiting rateNum={product.rate} starRate={1} />
            <div className="d-flex">
              <ProductHeartBtn productId={product.id} />
              <ProductCartBtn productId={product.id} />
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
    </React.Fragment>
  );
};
