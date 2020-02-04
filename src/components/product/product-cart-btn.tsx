import React, { useEffect } from "react";
import classnames from "classnames";
import { useCounter } from "../../hooks/common/useCounter";
import { ICartItem } from "../../data/product";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { changeQnty } from "../../redux/cart/cartActions";
import { useSkipFirstEffect } from "../../hooks/common/useSkipFirstEffect";

interface ProductCartBtnProps {
  productId: number;
  mainItemId: number;
  cartItem: ICartItem | null;
  changeQntyById: typeof changeQnty;
}

const _ProductCartBtn: React.FC<ProductCartBtnProps> = ({
  productId,
  cartItem,
  mainItemId,
  changeQntyById
}) => {
  // TODO: first render
  const { counter, increase } = useCounter(cartItem ? cartItem.items_count : 0);

  useSkipFirstEffect(() => {
    console.log("render first");
    changeQntyById(mainItemId, counter);
  }, [counter, mainItemId]);

  return (
    <button
      className={classnames("cart", { active: counter > 0 })}
      onClick={increase}
    >
      <img src="/assets/images/bag-dark.svg" alt="cart" />
      <div className="qty">
        <span className="num">{counter}</span>
      </div>
    </button>
  );
};

const mapStateToProps = (
  { cart }: IStoreState,
  ownProps: Omit<ProductCartBtnProps, "cartItem" | "changeQntyById">
) => {
  const { mainItemId } = ownProps;
  const cartItem = cart.itemsByKeys[mainItemId];
  return { cartItem };
};

export const ProductCartBtn = connect(mapStateToProps, {
  changeQntyById: changeQnty
})(_ProductCartBtn);
