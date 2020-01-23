import React from "react";
import { IBlog } from "../../../data/blog";
import { Link } from "react-router-dom";

interface BlogSliderItemProps {
  blog: IBlog;
}

export const BlogSliderItem: React.FC<BlogSliderItemProps> = ({ blog }) => {
  return (
    <div className="swiper-slide">
      <div className="image">
        <img src={blog.image} alt="blog" />
      </div>
      <div className="desc">
        <div className="date">{blog.date}</div>
        <div className="title">{blog.title}</div>
        <p className="txt">{blog.text}</p>
        <Link
          to="#"
          className="next d-flex align-items-center justify-content-between"
        >
          გაგრძელება
          <img src="/assets/images/arrow-right_dark.svg" alt="arrow" />
        </Link>
      </div>
    </div>
  );
};
