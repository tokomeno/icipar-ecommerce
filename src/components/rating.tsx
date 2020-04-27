import React, { useState } from "react";
import classnames from "classnames";

interface RatingProps {
  rating?: number;
  ratable?: boolean;
  onRateChange?: (rate: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  rating = 0,
  ratable = false,
  onRateChange,
}) => {
  const [rate, setRate] = useState(rating);
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          onClick={() => {
            if (ratable) {
              setRate(n);
              if (onRateChange) onRateChange(n);
            }
          }}
          className={classnames("fas fa-star", { checked: rate >= n })}
        />
      ))}
    </div>
  );
};
