import React, { useRef } from "react";
import { IProduct } from "../services/product.http";
import { useDetectOutsideClick } from "../hooks/common/useDetectOutsideClick";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/routes";

interface ProductAutocompleteDropdownProps {
  products: IProduct[];
  resetProducts: () => void;
}

export const ProductAutocompleteDropdown: React.FC<ProductAutocompleteDropdownProps> = ({
  products,
  resetProducts,
}) => {
  const searchDropdownRef = useRef(null);
  useDetectOutsideClick(searchDropdownRef, () => {
    resetProducts();
  });
  if (products.length === 0) return null;
  return (
    <div ref={searchDropdownRef} className="hdr-cart">
      <div className="dropdown">
        <div
          className="dropdown-menu show"
          style={{ overflowY: "auto", zIndex: 100 }}
          aria-labelledby="cart1"
        >
          {products.map((product) => (
            <NavLink
              key={product.id}
              onClick={resetProducts}
              to={routes.productShow(product.id, product.slug)}
              className="d-flex align-items-center item"
            >
              <div className="image d-flex align-items-center justify-content-center">
                <img
                  style={{ maxHeight: "100%" }}
                  src={product.thumbnail}
                  alt=""
                />
              </div>
              <div className="desc">
                <div className="item-title">{product.title}</div>
                <div className="price">
                  {product.price_min}
                  {product.price_max ? " - " + product.price_max : ""}
                  <sub>D</sub>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
