import React, { useState } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { BranchMap } from "../../components/branch-map";
import { IStoreState } from "../../redux/mainReducer";
import { IBranch } from "../../services/branch.http";
import { connect } from "react-redux";

interface MapComponentProps {
  children?: React.ReactNode;
  branches: IBranch[];
}

const _MapComponent: React.FC<MapComponentProps> = ({ children, branches }) => {
  const [mapBlockActive, setMapBlockActive] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div className="map-content">
      <button
        onClick={() => setMapBlockActive(prevState => !prevState)}
        className="map-btn"
      >
        {t("our_shops")}
      </button>
      <div className={classnames("map-block", { active: mapBlockActive })}>
        <div id="map">
          <BranchMap shops={branches} />
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

export const MapComponent = connect(mapStateToProps)(_MapComponent);
