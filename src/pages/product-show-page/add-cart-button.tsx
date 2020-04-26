import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCounter } from "../../hooks/common/useCounter";
import { connect } from "react-redux";
import { changeQnty } from "../../redux/cart/cartActions";
import { IProductWithItems } from "../../services/product.http";
import { diffInPercentage } from "../../utils";
import { IStoreState } from "../../redux/mainReducer";
import { ICartItem } from "../../redux/cart/cartTypes";

interface AddCartButtonProps {
  activeItem: IProductWithItems["items"][number];
  changeQntyById: typeof changeQnty;
  being_sold_online: boolean;
  cartItem: ICartItem | null;
  loadingItemId: number | null;
}

const _AddCartButton: React.FC<AddCartButtonProps> = ({
  activeItem,
  changeQntyById,
  cartItem,
  loadingItemId,
}) => {
  const { t } = useTranslation();
  const { counter: productQnty, decrease, increase, setCounter } = useCounter(
    cartItem && cartItem.items_count ? cartItem.items_count : 1,
    1
  );

  useEffect(() => {
    setCounter(1);
  }, [activeItem, setCounter]);

  useEffect(() => {
    if (cartItem && cartItem.items_count) {
      setCounter(cartItem.items_count);
    }
  }, [cartItem, setCounter]);

  return (
    <div className="price-block d-flex align-items-center justify-content-sm-start justify-content-center">
      <div className="price-cont">
        <div className="price">
          {activeItem.price}
          <sub>D</sub>
        </div>
        {/* "card-owner" კლასი დაამატეთ "sale" კლასს */}
        {activeItem.original_price &&
          activeItem.original_price !== activeItem.price && (
            <div className="sale-cont d-flex align-items-center">
              <div className="sale">
                -
                {Math.ceil(
                  diffInPercentage(activeItem.original_price, activeItem.price)
                )}
                %
                {/* <div className="hover">
              ფასდაკლებას იღებთ <br />
              ფასდაკლების ბარათის გამო
            </div> */}
              </div>
              <div className="old-price">
                {activeItem.original_price}
                <sub>D</sub>
              </div>
            </div>
          )}
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
      <button
        onClick={() => {
          changeQntyById(activeItem.id, productQnty);
        }}
        className="buy d-flex disableOpacity"
        disabled={activeItem.id === loadingItemId}
      >
        {t("cart")}
        <img src="/assets/images/arrow-right.svg" alt="arrow" />
        <img
          src="/assets/images/arrow-right_red.svg"
          alt="arrow"
          className="red"
        />
      </button>
    </div>
  );
};

const mapStateToProps = (
  { cart }: IStoreState,
  ownProps: Omit<
    AddCartButtonProps,
    "changeQntyById" | "cartItem" | "loadingItemId"
  >
) => {
  const { activeItem } = ownProps;
  const cartItem = cart.itemsByKeys[activeItem.id];
  return {
    cartItem,
    loadingItemId: cart.loadingItemId,
  };
};
export const AddCartButton = connect(mapStateToProps, {
  changeQntyById: changeQnty,
})(_AddCartButton);
