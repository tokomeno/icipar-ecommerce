import React from "react";
import { Layout } from "../../layout";

interface DemoPageProps {}

export const DemoPage: React.FC<DemoPageProps> = props => {
  return (
    <Layout>
      <div>Demo</div>
    </Layout>
  );
};
