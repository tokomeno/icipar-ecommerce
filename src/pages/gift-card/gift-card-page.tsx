import React from "react";
import { Layout } from "../../layout";

interface GiftCardPageProps {}

export const GiftCardPage: React.FC<GiftCardPageProps> = props => {
  return (
    <Layout>
      <div className="container">
        <form className="giftCard d-flex flex-column align-items-center justify-content-center">
          <input
            type="text"
            placeholder="ჩაწერეთ თანხა"
            className="amount text-center"
          />
          <div className="select">
            <div className="or-reg d-flex flex-column align-items-center justify-content-between">
              <span />
              <div className="txt">ან</div>
              <span />
            </div>
            <button type="button" className="select-btn online">
              ონლაინ ვაუჩერი
            </button>
            <button type="button" className="select-btn deliv">
              ადგილზე მიტანით
            </button>
          </div>
          <button className="add">კალათაში დამატება</button>
        </form>
      </div>
    </Layout>
  );
};
