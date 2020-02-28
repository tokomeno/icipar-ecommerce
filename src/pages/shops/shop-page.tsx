import React, { useState } from "react";
import { IBranch } from "../../services/branch.http";
import { LayoutSpinner } from "../../components/spinners/layout-spinner";
import classnames from "classnames";
import { BranchMap } from "../../components/branch-map";
import { IStoreState } from "../../redux/mainReducer";
import { connect } from "react-redux";

interface ShopPageProps {
  branches: IBranch[];
}

export const _ShopPage: React.FC<ShopPageProps> = ({ branches }) => {
  const [activeId, setActiveId] = useState<null | number>(null);

  if (!branches) return <LayoutSpinner></LayoutSpinner>;
  return (
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
              {branches.map(shop => (
                <div
                  key={shop.id}
                  data-geo-lat={shop.lat}
                  data-geo-long={shop.lng}
                  className={classnames("shops-item", {
                    "hover active": shop.id === activeId
                  })}
                  onClick={() =>
                    setActiveId(shop.id === activeId ? null : shop.id)
                  }
                >
                  <div className="top d-flex align-items-center justify-content-between">
                    <div className="location">{shop.full_address}</div>
                    <i className="fas fa-minus" />
                    <i className="fas fa-plus" />
                  </div>
                  <div className="desc">
                    <div className="d-flex map-item">
                      <i className="fas fa-phone" />
                      <a href="tel:+995322201717" className="time">
                        {shop.phone}
                      </a>
                    </div>
                    <div className="d-flex map-item">
                      <i className="fas fa-clock" />
                      <div className="time">{shop.opening_hours}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <div id="map_canvas" style={{ width: "100%" }}>
              <BranchMap shops={branches} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ info }: IStoreState) => {
  return {
    branches: info.branches
  };
};

export const ShopPage = connect(mapStateToProps)(_ShopPage);
