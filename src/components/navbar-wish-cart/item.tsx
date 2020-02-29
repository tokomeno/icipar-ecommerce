import React from "react";

interface DropdownItemProps {
  product: {
    thumbnail: string;
    price: number | string;
    item_title: string;
  };
  // | {
  //     thumbnail: string;
  //     price: number | string;
  //     item_title: string;
  //   };
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ product }) => {
  return (
    <div className="d-flex align-items-center item">
      <div className="image d-flex align-items-center justify-content-center">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="desc">
        <div className="item-title">
          {product.item_title}
          {/* {product.title && product.title} */}
          {/* {product.title ? product.title : product.item_title} */}
        </div>
        <div className="price">
          {product.price}
          <sub>D</sub>
        </div>
      </div>
    </div>
  );
};
