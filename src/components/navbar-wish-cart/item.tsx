import React from "react";
import { ICartItem } from "../../data/product";

interface DropdownItemProps {
  product: ICartItem;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ product }) => {
  return (
    <div className="d-flex align-items-center item">
      <div className="image d-flex align-items-center justify-content-center">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="desc">
        <div className="item-title">{product.item_title}</div>
        <div className="price">
          {product.price}
          <sub>D</sub>
        </div>
      </div>
    </div>
  );
};
