import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HomePageBlogSlider } from "../../../services/blog.http";

interface BlogSliderItemProps {
  blog: HomePageBlogSlider["blog_posts"][number];
}

export const BlogSliderItem: React.FC<BlogSliderItemProps> = ({ blog }) => {
  const { t } = useTranslation();
  return (
    <div className="swiper-slide fadeInOpacity">
      <div className="image">
        <img src={blog.thumbnail} alt="blog" />
      </div>
      <div className="desc">
        {/* <div className="date">{blog.created_at}</div> */}
        <div className="title">{blog.title}</div>
        <p className="txt">{blog.excerpt}</p>
        <Link
          to={`/blogs/${blog.slug}`}
          className="next d-flex align-items-center justify-content-between"
        >
          {t("continue")}
          <img src="/assets/images/arrow-right_dark.svg" alt="arrow" />
        </Link>
      </div>
    </div>
  );
};
