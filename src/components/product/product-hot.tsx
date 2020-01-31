import React from "react";

interface ProductHotProps {}

export const ProductHot: React.FC<ProductHotProps> = props => {
  return (
    <div className="hot-block d-flex">
      <div className="timer d-flex flex-column align-items-center justify-content-center">
        <div className="timer-num d-flex justify-content-center">
          <div className="num-item">00</div>
          <div className="num-item">11</div>
          <div className="num-item dark">07</div>
          <div className="num-item dark">32</div>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: "70%" }} />
        </div>
      </div>
      <a
        href="#!"
        className="bag d-flex align-items-center justify-content-center"
      >
        <img src="/assets/images/bagwhite.svg" alt="bag" />
        <img src="/assets/images/bag-r.svg" alt="bag" className="red" />
      </a>
    </div>
  );
};
