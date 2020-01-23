import React from "react";
import { dummyBlogData } from "../../data/blog";
import { SwiperCustomNavBtn } from "../swiper/swiper-custom-nav-btn";
import Swiper from "react-id-swiper";
import { useSliderNav } from "../../hooks/common/useSliderNav";
import { productCategories } from "../../data/categories";
import { CommentSliderItem } from "./comment-slider-item";

interface CommentSliderProps {}

const params = {
  autoplay: {
    delay: 1000
  },
  slidesPerView: 4,
  // spaceBetween: 60,
  renderPrevButton: () => null,
  renderNextButton: () => null,
  breakpoints: {
    1499: {
      slidesPerView: 4
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 3
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    420: {
      slidesPerView: 1
    }
  }
};

export const CommentSlider: React.FC<CommentSliderProps> = ({}) => {
  const { sliderNav, currentSliderIndex } = useSliderNav(5, 0);
  return (
    <div className="comments">
      <div className="container">
        <Swiper
          containerClass={"swiper-container comment-slider"}
          activeSlideKey={currentSliderIndex.toString()}
          {...params}
        >
          {[1, 2, 3, 5].map(i => (
            <CommentSliderItem key={i} />
          ))}
        </Swiper>
      </div>
      <SwiperCustomNavBtn sliderNav={sliderNav} />
    </div>
  );
};
