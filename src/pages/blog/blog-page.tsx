import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BlogSliderItem } from "../../components/sliders/blog-slider/blog-slider-item";

import { BlogContetnLoader } from "../../components/blogs/blog-content-loader";
import { BlogService, IBlogList } from "../../services/blog.http";

interface BlogPageProps {}

export const BlogPage: React.FC<BlogPageProps> = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<IBlogList[]>([]);

  useEffect(() => {
    BlogService.getAll()
      .then((res) => {
        setBlogs(res.data.data);
      })
      .catch((err) => {
        alert("404");
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="about row">
          {/* <div className="col-md-3 d-none d-lg-block"> */}
          {/* <div className="aboutmenu">
            <a href="/blog" className=" active  aboutmenu-item">
              ყველა
            </a>
            @if(count($categories) &gt; 0) @foreach($categories as $cat)
            <a
              href="/search/{{$cat->slug}}"
              className=" active  aboutmenu-item"
            >
              {"{"}
              {"{"}$cat-&gt;name{"}"}
              {"}"}
            </a>
            @endforeach @else
            <p>კატეგორიები არ არის შექმნილი</p>
            @endif
          </div> */}
          {/* </div> */}
          {/* <div className="col-lg-9"> */}
          <div className="right">
            <div className="top">
              <h1 className="title">{t("blog_page")}</h1>
            </div>
            <div className="desc">
              <section
                className="blogSection aos-init aos-animate"
                data-aos="fade-up"
                style={{ marginTop: 0 }}
              >
                <div className="container ">
                  <div
                    className="blogSlider"
                    style={{ backgroundColor: "initial" }}
                  >
                    <div className="row blog-container blog-list">
                      {blogs.length ? (
                        blogs.map((blog) => (
                          <div key={blog.slug} className="col-md-6 mb-20">
                            <BlogSliderItem blog={blog} />
                          </div>
                        ))
                      ) : (
                        <BlogContetnLoader items={15} />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

// {new Array(10).fill(1).map((a, index) => (
//   <div className="catalog-item" key={index}>
//     <div className="image" style={{ overflow: "hidden" }}>
//       <ContentLoader
//         speed={2}
//         width={400}
//         height={400}
//         viewBox="0 0 400 400"
//         backgroundColor="#f3f3f3"
//         foregroundColor="#ecebeb"
//       >
//         <rect x="0" y="0" rx="7" ry="7" width="400" height="400" />
//       </ContentLoader>
//     </div>
//   </div>
