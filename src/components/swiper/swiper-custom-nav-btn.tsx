import React from "react";
import { ISliderNav } from "../../hooks/common/useSliderNav";

type SwiperCustomNavBtnProps = {
  sliderNav: ISliderNav;
};
export const SwiperCustomNavBtn: React.FC<SwiperCustomNavBtnProps> = ({
  sliderNav
}) => {
  return (
    <React.Fragment>
      <div
        onClick={() => sliderNav("forward")}
        className="swiper-button-next d-flex align-items-center justify-content-center"
      >
        <i className="fas fa-angle-right" />
      </div>
      <div
        onClick={() => sliderNav("backward")}
        className="swiper-button-prev d-flex align-items-center justify-content-center"
      >
        <i className="fas fa-angle-left" />
      </div>
    </React.Fragment>
  );
};
