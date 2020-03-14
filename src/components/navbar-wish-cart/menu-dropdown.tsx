import React from "react";
import classnames from "classnames";
import { Dropdown } from "react-bootstrap";
import { DropdownItem } from "./item";
import { ICartItem } from "../../redux/cart/cartTypes";
import { IFavoritesState } from "../../redux/favorites/favoritesTypes";

interface IMenuDropdownProps {
  buttonChildren: React.ReactNode;
  navLink: React.ReactNode;
  products: ICartItem[] | IFavoritesState["items"];
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
          {(products as any).slice(0, 5).map((p: any) => (
            <DropdownItem
              product={{
                thumbnail: (p as any).thumbnail,
                title: (p as any).title || (p as any).item_title,
                price: (p as any).price || null
              }}
              key={(p as any).item_id || (p as any).id}
            />
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
