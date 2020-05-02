import React from "react";
import { Rating } from "../rating";

interface ProductRaitingProps {
  rateNum: number;
  starRate: number;
}

export const ProductRaiting: React.FC<ProductRaitingProps> = ({
  rateNum,
  starRate,
}) => {
  return (
    <div className="d-flex">
      <Rating rating={rateNum} />
      <span className="rateNum">({rateNum})</span>
    </div>
  );
};
