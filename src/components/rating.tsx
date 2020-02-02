import React, { useState } from "react";
import classnames from "classnames";

interface RatingProps {
  rating: number;
  ratable?: boolean;
}

export const Rating: React.FC<RatingProps> = ({ rating, ratable = true }) => {
  const [rate, setRate] = useState(rating);
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map(n => (
        <span
          key={n}
          onClick={() => {
            if (ratable) {
              setRate(n);
            }
          }}
          className={classnames("fas fa-star", { checked: rate >= n })}
        />
      ))}
    </div>
  );
};
