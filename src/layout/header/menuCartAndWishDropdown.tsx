import React from "react";
import classnames from "classnames";
import { Dropdown } from "react-bootstrap";
import { CustomToggleMenuCartAndWish } from "./customToggleMenuCartAndWish.jsx";
import { IProduct } from "../../data/product.js";

interface MenuCartAndWishDropdownProps {
  buttonChildren: React.ReactNode;
  navLink: React.ReactNode;
  products: IProduct[];
  wrapperClassName?: "hdr-fav";
}

export const MenuCartAndWishDropdown: React.FC<MenuCartAndWishDropdownProps> = ({
  products,
  wrapperClassName,
  buttonChildren,
  navLink
}) => {
  return (
    <div className={classnames("hdr-cart", wrapperClassName)}>
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggleMenuCartAndWish}
          id="dropdown-custom-components"
        >
          {buttonChildren}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <DropDownProductItem />
          {navLink}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

interface DropDownProductItemProps {}

const DropDownProductItem: React.FC<DropDownProductItemProps> = () => {
  return (
    <div className="d-flex align-items-center item">
      <div className="image d-flex align-items-center justify-content-center">
        <img src="/assets/uploads/images/cart-product.png" alt="" />
      </div>
      <div className="desc">
        <div className="item-title">Calvin Klein All, 100ml, Red</div>
        <div className="price">
          110
          <sub>D</sub>
        </div>
      </div>
    </div>
  );
};
