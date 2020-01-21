import React, { ReactElement, useEffect } from "react";
import { Layout } from "../../layout";

interface ShopPageProps {}

export const ShopPage: React.FC<ShopPageProps> = props => {
  return (
    <Layout>
      <div className="content">
        <div className="container">
          <div className="about row">
            <div className="col-md-4 d-none d-lg-block">
              <form className="map-search">
                <input type="text" placeholder="გვიპოვე შენთან ახლოს" />
                <button type="submit" className="btn">
                  <i className="fas fa-search" />
                </button>
              </form>
              <div className="shops">
                <div
                  data-geo-lat="41.7347367"
                  data-geo-long="44.7811929"
                  className="shops-item"
                >
                  <div className="top d-flex align-items-center justify-content-between">
                    <div className="location">
                      თბილისი, ც. დადიანი ქ. სუპერმარკეტი
                    </div>
                    <i className="fas fa-minus" />
                    <i className="fas fa-plus" />
                  </div>
                  <div className="desc">
                    <div className="d-flex map-item">
                      <i className="fas fa-phone" />
                      <a href="tel:+995322201717" className="time">
                        +995 32 2 20 17 17
                      </a>
                    </div>
                    <div className="d-flex map-item">
                      <i className="fas fa-clock" />
                      <div className="time">
                        ორშაბათი - კვირა: 10:00 - 20:00
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-geo-lat="41.7337078"
                  data-geo-long="44.7947667"
                  className="shops-item"
                >
                  <div className="top d-flex align-items-center justify-content-between">
                    <div className="location">
                      თბილისი, წერეთლის გამზირი, N69
                    </div>
                    <i className="fas fa-minus" />
                    <i className="fas fa-plus" />
                  </div>
                  <div className="desc">
                    <div className="d-flex map-item">
                      <i className="fas fa-phone" />
                      <a href="tel:+995322201717" className="time">
                        +995 32 2 20 17 17
                      </a>
                    </div>
                    <div className="d-flex map-item">
                      <i className="fas fa-clock" />
                      <div className="time">
                        ორშაბათი - კვირა: 10:00 - 20:00
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-geo-lat="41.7109307"
                  data-geo-long="44.7563481"
                  className="shops-item"
                >
                  <div className="top d-flex align-items-center justify-content-between">
                    <div className="location">
                      თბილისი, ჭავჭავაძის გამზირი, N69
                    </div>
                    <i className="fas fa-minus" />
                    <i className="fas fa-plus" />
                  </div>
                  <div className="desc">
                    <div className="d-flex map-item">
                      <i className="fas fa-phone" />
                      <a href="tel:+995322201717" className="time">
                        +995 32 2 20 17 17
                      </a>
                    </div>
                    <div className="d-flex map-item">
                      <i className="fas fa-clock" />
                      <div className="time">
                        ორშაბათი - კვირა: 10:00 - 20:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div id="map_canvas" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
