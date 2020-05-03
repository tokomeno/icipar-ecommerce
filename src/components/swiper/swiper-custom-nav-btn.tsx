import React from "react";
import { SwiperInstance } from "react-id-swiper";

type SwiperCustomNavBtnProps = {
  swiper: SwiperInstance | null;
};
export const SwiperCustomNavBtn: React.FC<SwiperCustomNavBtnProps> = ({
  swiper,
}) => {
  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <React.Fragment>
      <div
        onClick={goNext}
        className="swiper-button-next d-flex align-items-center justify-content-center"
      >
        <i className="fas fa-angle-right" />
      </div>
      <div
        onClick={goPrev}
        className="swiper-button-prev d-flex align-items-center justify-content-center"
      >
        <i className="fas fa-angle-left" />
      </div>
    </React.Fragment>
  );
};
