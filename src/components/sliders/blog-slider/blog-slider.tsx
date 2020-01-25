import React from "react";
import { useSliderNav } from "../../../hooks/common/useSliderNav";
import { dummyBlogData } from "../../../data/blog";
import { productCategories } from "../../../data/categories";
import Swiper from "react-id-swiper";
import { BlogSliderItem } from "./blog-slider-item";
import { SwiperCustomNavBtn } from "../../swiper/swiper-custom-nav-btn";

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
  }
};

export const BlogSlider: React.FC<BlogSliderProps> = () => {
  const { sliderNav, currentSliderIndex } = useSliderNav(
    dummyBlogData.length,
    0
  );

  return (
    <section className="blogSection" data-aos-off="fade-up">
      <div className="blogSlider-top">
        <div className="container">
          <div className="d-flex flex-column flex-md-row">
            <h3 className="news-titleBlock_title  section-title">
              <img src="/assets/images/blog-icon.svg" alt="blog icon" />
              ბლოგი
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
            {dummyBlogData.map(blog => (
              <BlogSliderItem key={blog.id} blog={blog} />
            ))}
          </Swiper>
        </div>
        {/* Add Arrows */}
        <SwiperCustomNavBtn sliderNav={sliderNav} />

        {/* <div className="swiper-button-next d-flex align-items-center justify-content-center">
          <i className="fas fa-angle-right" />
        </div>
        <div className="swiper-button-prev d-flex align-items-center justify-content-center">
          <i className="fas fa-angle-left" />
        </div> */}
      </div>
    </section>
  );
};
