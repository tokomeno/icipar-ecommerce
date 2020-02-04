import React, { useCallback, useMemo } from "react";
import { IProductWithItems, ICartItem } from "../../data/product";
import { useTranslation } from "react-i18next";
import { useCounter } from "../../hooks/common/useCounter";
import { connect } from "react-redux";
import { changeQnty } from "../../redux/cart/cartActions";
import { IStoreState } from "../../redux/mainReducer";

interface AddCartButtonProps {
  activeItem: IProductWithItems["items"][number];
  changeQntyById: typeof changeQnty;
  cartItem: ICartItem | null;
}

const _AddCartButton: React.FC<AddCartButtonProps> = ({
  activeItem,
  changeQntyById,
  cartItem
}) => {
  const { t } = useTranslation();
  const { counter: productQnty, decrease, increase } = useCounter(1, 1);

  return (
    <div className="price-block d-flex align-items-center justify-content-sm-start justify-content-center">
      <div className="price-cont">
        <div className="price">
          {activeItem.price}
          <sub>D</sub>
        </div>
        {/* "card-owner" კლასი დაამატეთ "sale" კლასს */}
        {/* <div className="sale-cont d-flex align-items-center">
          <div className="sale">
            -70%
            <div className="hover">
              ფასდაკლებას იღებთ <br />
              ფასდაკლების ბარათის გამო
            </div>
          </div>
          <div className="old-price">
            110
            <sub>D</sub>
          </div>
        </div> */}
      </div>
      <div className="quantity d-flex flex-column align-items-center">
        <span onClick={increase} className="plus">
          <i className="fas fa-chevron-up" />
        </span>
        <span className="qty">
          <input readOnly type="number" value={productQnty} />
        </span>
        <span onClick={decrease} className="min">
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <a
        onClick={() => {
          changeQntyById(activeItem.id, productQnty);
        }}
        href="#!"
        className="buy d-flex"
      >
        {t("cart")}
        <img src="/assets/images/arrow-right.svg" alt="arrow" />
        <img
          src="/assets/images/arrow-right_red.svg"
          alt="arrow"
          className="red"
        />
      </a>
    </div>
  );
};

const mapStateToProps = (
  { cart }: IStoreState,
  ownProps: Omit<AddCartButtonProps, "changeQntyById" | "cartItem">
) => {
  return {
    cartItem: cart.itemsByKeys[ownProps.activeItem.id]
  };
};

export const AddCartButton = connect(mapStateToProps, {
  changeQntyById: changeQnty
})(_AddCartButton);
