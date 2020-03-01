import React, { useEffect, useState } from "react";

import { PageSideMenu } from "../../components/pageSideMenu";
import { match } from "react-router-dom";
import Axios from "axios";
import { STATIC_PAGE } from "../../api/endpoints";
import { LayoutSpinner } from "../../components/spinners/layout-spinner";

interface StaticPageProps {
  match: match<{ slug: string }>;
}

interface IStaticPage {
  title: string;
  body: string;
}

export const StaticPage: React.FC<StaticPageProps> = ({ match }) => {
  const [page, setPage] = useState<IStaticPage | null>(null);
  useEffect(() => {
    Axios.get<{ data: IStaticPage }>(STATIC_PAGE + match.params.slug)
      .then(res => setPage(res.data.data))
      .catch(err => {
        alert("404");
        console.error(err);
      });
  }, [match.params.slug]);
  if (!page) return <LayoutSpinner />;
  return (
    <div className="container">
      <div className="about row">
        <PageSideMenu />
        <div className="col-lg-9">
          <div className="right iframe-block">
            <div className="top">
              <h1 className="title">{page.title}</h1>
            </div>
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: page.body }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
