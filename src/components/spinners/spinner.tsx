import React from "react";

import { BounceLoader } from "react-spinners";

interface DefaultSpinnerProps {}

export const DefaultSpinner: React.FC<DefaultSpinnerProps> = () => {
  return (
    <div
      className="container"
      style={{
        minHeight: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BounceLoader size={40} color={"#fa7268"} loading={true} />
    </div>
  );
};
