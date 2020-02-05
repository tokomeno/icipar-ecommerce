import React from "react";
import classnames from "classnames";
import { ICartItem } from "../../data/product";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { increaseItem } from "../../redux/cart/cartActions";

interface ProductCartBtnProps {
  productId: number;
  mainItemId: number;
  cartItem: ICartItem | null;
  increaseItem: typeof increaseItem;
  loadingItemId: number | null;
}

const _ProductCartBtn: React.FC<ProductCartBtnProps> = ({
  cartItem,
  mainItemId,
  increaseItem,
  loadingItemId
}) => {
  return (
    <button
      className={classnames("cart disableOpacity", {
        active: cartItem && cartItem.items_count > 0
      })}
      disabled={mainItemId === loadingItemId}
      onClick={() =>
        mainItemId !== loadingItemId ? increaseItem(mainItemId) : null
      }
    >
      <img src="/assets/images/bag-dark.svg" alt="cart" />
      <div className="qty">
        <span className="num">{cartItem ? cartItem.items_count : null}</span>
      </div>
    </button>
  );
};

const mapStateToProps = (
  { cart }: IStoreState,
  ownProps: Omit<
    ProductCartBtnProps,
    "cartItem" | "increaseItem" | "loadingItemId"
  >
) => {
  const { mainItemId } = ownProps;
  const cartItem = cart.itemsByKeys[mainItemId];
  return {
    cartItem,
    loadingItemId: cart.loadingItemId
  };
};

export const ProductCartBtn = connect(mapStateToProps, {
  increaseItem: increaseItem
})(_ProductCartBtn);
