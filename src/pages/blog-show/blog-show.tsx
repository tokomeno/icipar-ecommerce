import React, { useEffect, useState } from "react";
// import classnames from "classnames";
import { Layout } from "../../layout";
// import { PageSideMenu } from "../../components/pageSideMenu";
import { IBlogList } from "../../data/blog";
import { List } from "react-content-loader";
import { match } from "react-router-dom";
import { axiosWithToken } from "../../api/axios-with-token";
import { BLOG_SHOW } from "../../api/endpoints";

interface BlogShowPageProps {
  match: match<{ slug: string }>;
}

export const BlogShowPage: React.FC<BlogShowPageProps> = ({ match }) => {
  const [blog, setBlog] = useState<IBlogList | null>(null);

  useEffect(() => {
    axiosWithToken
      .get<{ data: IBlogList }>(BLOG_SHOW + match.params.slug)
      .then(res => {
        setBlog(res.data.data);
      })
      .catch(err => {
        alert("404");
        console.log(err);
      });
  }, [match.params.slug]);

  return (
    <Layout>
      <div className="container">
        <div className="about">
          <div className="row">
            {/* <div className="col-md-3 d-none d-lg-block">
            <div className="aboutmenu"></div>
          </div> */}
            <div className="col-md-9">
              {blog ? (
                <>
                  <div className="top">
                    <h1 className="title mt-20">{blog.title}</h1>
                    <span className="badge badge-secondary">
                      {blog.created_at}
                    </span>
                    <div className="blog-image mt-20">
                      <img
                        src={blog.thumbnail}
                        className="img-fluid"
                        alt="blog"
                      />
                    </div>
                  </div>
                  <div className="desc mt-20">{blog.excerpt}</div>
                </>
              ) : (
                <div className="mt-20">
                  <List />
                  <List />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
