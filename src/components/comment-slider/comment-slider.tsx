import React, { useEffect, useState } from "react";
import { SwiperCustomNavBtn } from "../swiper/swiper-custom-nav-btn";
import Swiper from "react-id-swiper";
import { useSliderNav } from "../../hooks/common/useSliderNav";
import { CommentSliderItem } from "./comment-slider-item";
import { axiosWithToken } from "../../api/axios-with-token";
import { FETCH_TESTIMONIALS } from "../../api/endpoints";

export interface IComment {
  author_name: string;
  text: string;
  rate: number;
}

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
  },
  observer: true
};

export const CommentSlider: React.FC<CommentSliderProps> = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    axiosWithToken
      .get<{ data: IComment[] }>(FETCH_TESTIMONIALS)
      .then(res => {
        setComments(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const { sliderNav, currentSliderIndex } = useSliderNav(5, 0);
  return (
    <div className="comments">
      <div className="container">
        <Swiper
          containerClass={"swiper-container comment-slider"}
          activeSlideKey={currentSliderIndex.toString()}
          {...params}
        >
          {comments.map((comment, i) => (
            <CommentSliderItem key={i} comment={comment} />
          ))}
        </Swiper>
      </div>
      {comments.length > 0 ? (
        <SwiperCustomNavBtn sliderNav={sliderNav} />
      ) : null}
    </div>
  );
};
