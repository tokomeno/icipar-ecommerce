import React from "react";
import ContentLoader, { Code } from "react-content-loader";

export const BlogContetnLoader: React.FC<{ items: number | null }> = ({
  items = 10,
}) => {
  return (
    <>
      {new Array(items).fill(1).map((a, index) => (
        <div className="col-md-6" key={index}>
          <div className="" style={{ overflow: "hidden" }}>
            <ContentLoader
              speed={2}
              width={500}
              height={220}
              viewBox="0 0 500 220"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="7" ry="7" width="500" height="220" />
            </ContentLoader>
            <Code />
          </div>
        </div>
      ))}
    </>
  );
};
