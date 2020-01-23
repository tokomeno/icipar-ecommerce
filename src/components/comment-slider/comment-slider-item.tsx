import React from "react";

interface CommentSliderItemProps {}

export const CommentSliderItem: React.FC<CommentSliderItemProps> = ({}) => {
  return (
    <div className="swiper-slide d-flex flex-column align-items-center justify-content-center">
      <div className="rate">
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </div>

      <div className="comment">საუკეთესო სერვისი თბილისში</div>
      <div className="user">ანა თოიძე</div>
    </div>
  );
};
