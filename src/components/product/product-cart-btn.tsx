import React, { useState } from "react";
import classnames from "classnames";
import { useCounter } from "../../hooks/common/useCounter";

interface ProductCartBtnProps {
  productId: number;
}

export const ProductCartBtn: React.FC<ProductCartBtnProps> = ({
  productId
}) => {
  const { counter, increase } = useCounter(0);
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
