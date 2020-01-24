import React from "react";
import classnames from "classnames";
import { useToggle } from "../../hooks/common/useToggle";

interface ProductHeartBtnProps {
  productId: number;
}

export const ProductHeartBtn: React.FC<ProductHeartBtnProps> = ({
  productId
}) => {
  const { toggle, isActive } = useToggle(false);
  return (
    <button
      onClick={toggle}
      className={classnames("heart", { active: isActive })}
    >
      <img src="/assets/images/heart-dark.svg" alt="favorite" />
      <img src="/assets/images/loved.svg" alt="favorite" className="added" />
    </button>
  );
};
