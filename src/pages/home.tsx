import React, { ReactElement } from "react";
import { Layout } from "../layout";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = props => {
  return (
    <Layout>
      <div>HomePage</div>
    </Layout>
  );
};
