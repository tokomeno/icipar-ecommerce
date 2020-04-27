import React, { useEffect, useState } from "react";
import { useSliderNav } from "../../../hooks/common/useSliderNav";
import Swiper from "react-id-swiper";
import { BlogSliderItem } from "./blog-slider-item";
import { SwiperCustomNavBtn } from "../../swiper/swiper-custom-nav-btn";
import { useTranslation } from "react-i18next";
import { HomePageBlogSlider, BlogService } from "../../../services/blog.http";
import { DefaultSpinner } from "../../spinners/spinner";
import classnames from "classnames";
import { useHistory } from "react-router-dom";
import { routes } from "../../../routes/routes";

interface BlogSliderProps {}

const params = {
  slidesPerView: 4,
  spaceBetween: 20,
  renderPrevButton: () => null,
  renderNextButton: () => null,
  breakpoints: {
    1499: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
  observer: true,
};

export const BlogSlider: React.FC<BlogSliderProps> = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [blogs, setBlogs] = useState<HomePageBlogSlider["blog_posts"]>([]);
  const [categories, setCatrgories] = useState<{ id: number; title: string }[]>(
    []
  );
  const [blogsSlider, setBlogsSlider] = useState<HomePageBlogSlider[]>([]);
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const setActiveTab = (category_id: number) => {
    const p = blogsSlider.find((item) => item.category_id === category_id);
    if (!p) return;
    setBlogs(p.blog_posts);
    setActiveTabId(p.category_id);
  };

  useEffect(() => {
    BlogService.homePageSlider()
      .then((res) => {
        setBlogsSlider(res.data.data);
        setCatrgories(
          res.data.data.map((i) => ({
            id: i.category_id,
            title: i.category_title,
          }))
        );
        setBlogs(res.data.data[0].blog_posts);
        setActiveTabId(res.data.data[0].category_id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { sliderNav, currentSliderIndex } = useSliderNav(blogs.length, 0);

  return (
    <section className="blogSection" data-aos-off="fade-up">
      <div className="blogSlider-top">
        <div className="container">
          <div className="d-flex flex-column flex-md-row">
            <h3
              onClick={() => history.push(routes.blogs)}
              className="news-titleBlock_title  section-title cursor-pointer"
            >
              <img src="/assets/images/blog-icon.svg" alt="blog icon" />
              {t("blog")}
            </h3>
            <div className="menu d-flex align-items-center">
              {categories.map((i) => (
                <a
                  key={i.id}
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(i.id);
                  }}
                  className={classnames("menu_link", {
                    active: i.id === activeTabId,
                  })}
                >
                  {i.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="blogSlider">
        <div className="container">
          {activeTabId ? (
            <Swiper
              containerClass={"blog-container swiper-container"}
              activeSlideKey={currentSliderIndex.toString()}
              {...params}
            >
              {blogs.map((blog, index) => (
                <BlogSliderItem key={index} blog={blog} />
              ))}
            </Swiper>
          ) : (
            <DefaultSpinner />
          )}
        </div>
        <SwiperCustomNavBtn sliderNav={sliderNav} />
      </div>
    </section>
  );
};
