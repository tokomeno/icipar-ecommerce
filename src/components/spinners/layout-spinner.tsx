import React from "react";

import { BounceLoader } from "react-spinners";

interface LayoutSpinnerProps {}

export const LayoutSpinner: React.FC<LayoutSpinnerProps> = () => {
  return (
    <>
      <div
        className="container"
        style={{
          minHeight: 480,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BounceLoader size={40} color={"#fa7268"} loading={true} />
      </div>
    </>
  );
};
