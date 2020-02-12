import React from "react";
import classnames from "classnames";
import { IComment } from "./comment-slider";
import { Rating } from "../rating";

interface CommentSliderItemProps {
  comment: IComment;
}

export const CommentSliderItem: React.FC<CommentSliderItemProps> = ({
  comment: { author_name, rate, text }
}) => {
  return (
    <div className="swiper-slide d-flex flex-column align-items-center justify-content-center">
      <div className="rate">
        <Rating rating={rate} ratable={false} />
      </div>

      <div className="comment">{text}</div>
      <div className="user">{author_name}</div>
    </div>
  );
};
