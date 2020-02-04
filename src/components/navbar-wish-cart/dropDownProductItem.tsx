import React from "react";
import { ICartItem } from "../../data/product";

interface DropDownProductItemProps {
  product: ICartItem;
}

export const DropDownProductItem: React.FC<DropDownProductItemProps> = ({
  product
}) => {
  return (
    <div className="d-flex align-items-center item">
      <div className="image d-flex align-items-center justify-content-center">
        <img src="/assets/uploads/images/cart-product.png" alt="" />
      </div>
      <div className="desc">
        <div className="item-title">{product.title}</div>
        <div className="price">
          {product.price}
          <sub>D</sub>
        </div>
      </div>
    </div>
  );
};
