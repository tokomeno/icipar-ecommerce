import React from "react";

import { PageSideMenu } from "../../components/pageSideMenu";

interface HowItWorksPageProps {}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = (props) => {
  return (
    <div className="container">
      <div className="about row">
        <PageSideMenu />
        <div className="col-lg-9">
          <div className="right iframe-block">
            <div className="top">
              <h1 className="title">როგორ მუშაობს</h1>
            </div>
            <div className="desc">
              <iframe
                title="iframe"
                width={560}
                height={600}
                src="https://www.youtube.com/embed/gTJEJ4yRdRo"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
