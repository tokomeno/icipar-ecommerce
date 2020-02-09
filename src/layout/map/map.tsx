import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

interface MapComponentProps {
  children?: React.ReactNode;
}

export const MapComponent: React.FC<MapComponentProps> = ({ children }) => {
  const [mapBlockActive, setMapBlockActive] = useState<boolean>(false);
  const { t } = useTranslation();

  // let a: any = window;
  // useEffect(() => {
  //   try {
  //     if (a.initMap) a.initMap();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  return (
    <div className="map-content">
      <button
        onClick={() => setMapBlockActive(prevState => !prevState)}
        className="map-btn"
      >
        {t("our_shops")}
      </button>
      <div className={classnames("map-block", { active: mapBlockActive })}>
        <div id="map"></div>
      </div>
    </div>
  );
};
