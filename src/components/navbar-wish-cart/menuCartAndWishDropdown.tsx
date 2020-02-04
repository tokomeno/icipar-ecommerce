import React from "react";
import classnames from "classnames";
import { Dropdown } from "react-bootstrap";
import { ICartItem } from "../../data/product.js";
import { CustomToggleMenuCartAndWish } from "./customToggleMenuCartAndWish.jsx";
import { DropDownProductItem } from "./dropDownProductItem";

interface MenuCartAndWishDropdownProps {
  buttonChildren: React.ReactNode;
  navLink: React.ReactNode;
  products: ICartItem[];
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
          {products.map(p => (
            <DropDownProductItem product={p} key={p.item_id} />
          ))}
          {navLink}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
