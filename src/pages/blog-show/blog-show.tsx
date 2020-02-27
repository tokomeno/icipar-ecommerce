import React, { useEffect, useState } from "react";
// import classnames from "classnames";

// import { PageSideMenu } from "../../components/pageSideMenu";
import { match } from "react-router-dom";
import { BlogService, IBlogList } from "../../services/blog.http";
import { LayoutSpinner } from "../../components/spinners/layout-spinner";

interface BlogShowPageProps {
  match: match<{ slug: string }>;
}

export const BlogShowPage: React.FC<BlogShowPageProps> = ({ match }) => {
  const [blog, setBlog] = useState<IBlogList | null>(null);

  useEffect(() => {
    BlogService.getBySlug(match.params.slug)
      .then(res => {
        setBlog(res.data.data);
      })
      .catch(err => {
        alert("404");
        console.log(err);
      });
  }, [match.params.slug]);

  if (!blog) return <LayoutSpinner />;
  return (
    <div className="container">
      <div className="about">
        <div className="row">
          {/* <div className="col-md-3 d-none d-lg-block">
            <div className="aboutmenu"></div>
          </div> */}
          <div className="col-md-9">
            <div className="top">
              <h1 className="title mt-20">{blog.title}</h1>
              <span className="badge badge-secondary">{blog.created_at}</span>
              <div className="blog-image mt-20">
                <img src={blog.thumbnail} className="img-fluid" alt="blog" />
              </div>
            </div>
            <div className="desc mt-20">{blog.excerpt}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
