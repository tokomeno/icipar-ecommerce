import React from "react";
import ContentLoader from "react-content-loader";

export const ProductContetnLoader: React.FC<{ items: number | null }> = ({
  items = 10
}) => {
  return (
    <>
      {new Array(items).fill(1).map((a, index) => (
        <div className="catalog-item" key={index}>
          <div className="image" style={{ overflow: "hidden" }}>
            <ContentLoader
              speed={2}
              width={400}
              height={400}
              viewBox="0 0 400 400"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="7" ry="7" width="400" height="400" />
            </ContentLoader>
          </div>
        </div>
      ))}
    </>
  );
};
