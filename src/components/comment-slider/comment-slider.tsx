import React, { useEffect, useState } from "react";
import { SwiperCustomNavBtn } from "../swiper/swiper-custom-nav-btn";
import Swiper, { SwiperInstance } from "react-id-swiper";
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
    delay: 1000,
  },
  slidesPerView: 4,
  // spaceBetween: 60,
  renderPrevButton: () => null,
  renderNextButton: () => null,
  breakpoints: {
    1499: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    420: {
      slidesPerView: 1,
    },
  },
  observer: true,
};

export const CommentSlider: React.FC<CommentSliderProps> = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [swiper, setSwiper] = useState<null | SwiperInstance>(null);

  useEffect(() => {
    axiosWithToken
      .get<{ data: IComment[] }>(FETCH_TESTIMONIALS)
      .then((res) => {
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="comments">
      <div className="container">
        <Swiper
          containerClass={"swiper-container comment-slider"}
          getSwiper={(s) => setSwiper(s)}
          {...params}
        >
          {comments.map((comment, i) => (
            <CommentSliderItem key={i} comment={comment} />
          ))}
        </Swiper>
      </div>
      {comments.length > 0 ? <SwiperCustomNavBtn swiper={swiper} /> : null}
    </div>
  );
};
