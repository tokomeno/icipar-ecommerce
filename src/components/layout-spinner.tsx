import React from "react";
import { Layout } from "../layout";
import Spinner from "react-bootstrap/Spinner";

interface LayoutSpinnerProps {}

export const LayoutSpinner: React.FC<LayoutSpinnerProps> = () => {
  return (
    <Layout>
      <div
        className="container"
        style={{
          minHeight: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Spinner animation="grow" size="sm" />
      </div>
    </Layout>
  );
};
