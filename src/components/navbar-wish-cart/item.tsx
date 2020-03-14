import React from "react";

interface DropdownItemProps {
  product: {
    thumbnail: string;
    price?: number | string;
    title: string;
  };
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ product }) => {
  return (
    <div className="d-flex align-items-center item">
      <div className="image d-flex align-items-center justify-content-center">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="desc">
        <div className="item-title">{product.title}</div>
        {product.price && (
          <div className="price">
            {product.price}
            <sub>D</sub>
          </div>
        )}
      </div>
    </div>
  );
};
