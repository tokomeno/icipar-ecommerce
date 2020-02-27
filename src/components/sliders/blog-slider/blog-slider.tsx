import React, { useEffect, useState } from "react";
import { useSliderNav } from "../../../hooks/common/useSliderNav";
import { productCategories } from "../../../data/categories";
import Swiper from "react-id-swiper";
import { BlogSliderItem } from "./blog-slider-item";
import { SwiperCustomNavBtn } from "../../swiper/swiper-custom-nav-btn";
import { axiosWithToken } from "../../../api/axios-with-token";
import { LATEST_BLOG_POSTS } from "../../../api/endpoints";
import { useTranslation } from "react-i18next";
import { IBlogList } from "../../../services/blog.http";

interface BlogSliderProps {}

const params = {
  slidesPerView: 4,
  spaceBetween: 20,
  renderPrevButton: () => null,
  renderNextButton: () => null,
  breakpoints: {
    1499: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    991: {
      slidesPerView: 3
    },
    767: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    }
  },
  observer: true
};

export const BlogSlider: React.FC<BlogSliderProps> = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<IBlogList[]>([]);

  useEffect(() => {
    axiosWithToken
      .get<{ data: IBlogList[] }>(LATEST_BLOG_POSTS)
      .then(res => {
        setBlogs(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const { sliderNav, currentSliderIndex } = useSliderNav(blogs.length, 0);

  return (
    <section className="blogSection" data-aos-off="fade-up">
      <div className="blogSlider-top">
        <div className="container">
          <div className="d-flex flex-column flex-md-row">
            <h3 className="news-titleBlock_title  section-title">
              <img src="/assets/images/blog-icon.svg" alt="blog icon" />
              {t("blog")}
            </h3>
            <div className="menu d-flex align-items-center">
              {productCategories.map(i => (
                <a key={i.id} href="#!" className="menu_link">
                  {i.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="blogSlider">
        <div className="container">
          <Swiper
            containerClass={"blog-container swiper-container"}
            activeSlideKey={currentSliderIndex.toString()}
            {...params}
          >
            {blogs.map((blog, index) => (
              <BlogSliderItem key={index} blog={blog} />
            ))}
          </Swiper>
        </div>
        <SwiperCustomNavBtn sliderNav={sliderNav} />
      </div>
    </section>
  );
};
