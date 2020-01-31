import React from "react";
import { IProduct } from "../../data/product";
import { ProductRaiting } from "./product-raiting";
import { ProductCartBtn } from "./product-cart-btn";
import { ProductHeartBtn } from "./product-heart-btn";
import { Link } from "react-router-dom";
import { Hot } from "../hot/hot";

interface ProductProps {
  product: IProduct;
  wrapperClass: "catalog-item" | "swiper-slide" | "product";
  isHot?: boolean;
}

export const Product: React.FC<ProductProps> = ({
  wrapperClass,
  product,
  isHot
}) => {
  return (
    <React.Fragment>
      <div className={wrapperClass}>
        <div className="image">
          <Link to={`/product/${product.id}`} className="img">
            <img src={product.thumbnail} alt="" />
          </Link>
          <div className="option d-flex justify-content-between align-items-center">
            <ProductRaiting rateNum={product.rating} starRate={1} />
            <div className="d-flex">
              <ProductHeartBtn productId={product.id} />
              <ProductCartBtn productId={product.id} />
            </div>
          </div>
        </div>
        {isHot && <Hot />}
        <Link to={`/product/${product.id}`} className="news_link">
          {product.title}
        </Link>
        <div className="price">
          {product.price_min}
          <sub>D</sub>
        </div>
      </div>
    </React.Fragment>
  );
};
