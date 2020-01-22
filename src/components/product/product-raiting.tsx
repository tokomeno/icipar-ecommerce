import React, { useState } from "react";
import classnames from "classnames";

interface ProductRaitingProps {
  rateNum: number;
  starRate: number;
}

export const ProductRaiting: React.FC<ProductRaitingProps> = ({
  rateNum,
  starRate
}) => {
  const [rate, setRate] = useState(rateNum);
  return (
    <div className="d-flex">
      <div className="rating">
        {[1, 2, 3, 4, 5].map(n => (
          <span
            key={n}
            onClick={() => {
              setRate(n);
            }}
            className={classnames("fa fa-star", { checked: rate >= n })}
          />
        ))}
      </div>
      <span className="rateNum">({rateNum})</span>
    </div>
  );
};
