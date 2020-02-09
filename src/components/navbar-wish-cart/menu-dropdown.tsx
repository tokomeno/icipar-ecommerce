import React from "react";
import classnames from "classnames";
import { Dropdown } from "react-bootstrap";
import { ICartItem } from "../../data/product.js";
import { DropdownItem } from "./item";

interface IMenuDropdownProps {
  buttonChildren: React.ReactNode;
  navLink: React.ReactNode;
  products: ICartItem[];
  wrapperClassName?: "hdr-fav";
}

export const MenuDropdown: React.FC<IMenuDropdownProps> = ({
  products,
  wrapperClassName,
  buttonChildren,
  navLink
}) => {
  return (
    <div className={classnames("hdr-cart", wrapperClassName)}>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {buttonChildren}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {products.slice(0, 4).map(p => (
            <DropdownItem product={p} key={p.item_id} />
          ))}
          {navLink}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const CustomToggle = React.forwardRef<any, any>(
  ({ children, onClick }, ref) => (
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      aria-haspopup="true"
      aria-expanded="false"
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  )
);
