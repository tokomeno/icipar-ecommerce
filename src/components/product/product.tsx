import React from "react";
import { IProduct, ICartItem } from "../../data/product";
import { ProductRaiting } from "./product-raiting";
import { ProductCartBtn } from "./product-cart-btn";
import { ProductHeartBtn } from "./product-heart-btn";
import { Link } from "react-router-dom";
import { ProductHot } from "./product-hot";

interface ProductProps {
  product: IProduct;
  cartItem?: ICartItem;
  wrapperClass: "catalog-item" | "swiper-slide" | "product";
  isHot?: boolean;
}

export const Product: React.FC<ProductProps> = ({
  wrapperClass,
  product,
  isHot,
  cartItem
}) => {
  return (
    <React.Fragment>
      <div className={wrapperClass + " fadeInOpacity"}>
        <div className="image">
          <Link to={`/product/${product.id}`} className="img">
            <img src={product.thumbnail} alt="" />
          </Link>
          <div className="option d-flex justify-content-between align-items-center">
            <ProductRaiting rateNum={product.rating} starRate={1} />
            <div className="d-flex">
              <ProductHeartBtn productId={product.id} />
              <ProductCartBtn
                mainItemId={product.main_item_id}
                productId={product.id}
              />
            </div>
          </div>
        </div>
        {isHot && <ProductHot />}
        <Link to={`/product/${product.id}`} className="news_link">
          {product.title}
        </Link>
        <div className="price">
          {product.price_min} - {product.price_max}
          <sub>D</sub>
        </div>
      </div>
    </React.Fragment>
  );
};
