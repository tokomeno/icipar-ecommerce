import React, { useState, useEffect } from "react";
import { IBranch } from "../../services/branch.http";
import { LayoutSpinner } from "../../components/spinners/layout-spinner";
import classnames from "classnames";
import { BranchMap } from "../../components/branch-map";
import { IStoreState } from "../../redux/mainReducer";
import { connect } from "react-redux";
import { useInput } from "../../hooks/common/useInput";
import { useTranslation } from "react-i18next";

interface ShopPageProps {
  branches: IBranch[];
}

export const _ShopPage: React.FC<ShopPageProps> = ({ branches }) => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<null | number>(null);
  const [filterBranches, setFilterBranches] = useState<IBranch[]>([]);
  const searchInput = useInput("");

  useEffect(() => {
    setFilterBranches(branches);
  }, [branches, setFilterBranches]);

  useEffect(() => {
    const filtered = filterByValue(branches, searchInput.value);
    setFilterBranches(filtered);
  }, [branches, searchInput.value]);

  const [mapCentetedBranch, setMapCentetedBranch] = useState<
    IBranch | undefined
  >(undefined);

  if (!branches) return <LayoutSpinner></LayoutSpinner>;
  return (
    <div className="content">
      <div className="container">
        <div className="about row">
          <div className="col-md-4 d-none d-lg-block">
            <form className="map-search">
              <input
                {...searchInput}
                type="text"
                placeholder={t("find_us_near_you")}
              />
              {/* <button type="button" className="btn">
                <i className="fas fa-search" />
              </button> */}
            </form>
            <div className="shops">
              {filterBranches.map((shop) => (
                <div
                  key={shop.id}
                  data-geo-lat={shop.lat}
                  data-geo-long={shop.lng}
                  className={classnames("shops-item", {
                    "hover active": shop.id === activeId,
                  })}
                  onClick={() => {
                    setActiveId(shop.id === activeId ? null : shop.id);
                    setMapCentetedBranch(shop);
                  }}
                  onMouseEnter={() => setMapCentetedBranch(shop)}
                >
                  <div className="top d-flex align-items-center justify-content-between">
                    <div className="location">{shop.full_address}</div>
                    <i className="fas fa-minus" />
                    <i className="fas fa-plus" />
                  </div>
                  <div className="desc">
                    <div className="d-flex map-item">
                      <i className="fas fa-phone" />
                      <a href={"tel:" + shop.phone} className="time">
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
              <BranchMap
                centerData={
                  mapCentetedBranch
                    ? {
                        lat: parseFloat(mapCentetedBranch.lat),
                        lng: parseFloat(mapCentetedBranch.lng),
                      }
                    : undefined
                }
                shops={branches}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ info }: IStoreState) => {
  return {
    branches: info.branches,
  };
};

export const ShopPage = connect(mapStateToProps)(_ShopPage);

const filterByValue = (array: any[], string: string) => {
  return array.filter((o) =>
    Object.keys(o).some((k) => {
      if (typeof o[k] === "string") {
        return o[k].toLowerCase().includes(string.toLowerCase());
      }
      return false;
    })
  );
};
