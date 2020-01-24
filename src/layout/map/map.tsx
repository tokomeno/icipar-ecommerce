import React, { useEffect, useState } from "react";
import classnames from "classnames";

interface MapComponentProps {
  children?: React.ReactNode;
}

export const MapComponent: React.FC<MapComponentProps> = ({ children }) => {
  const [mapBlockActive, setMapBlockActive] = useState<boolean>(false);
  let mW: any = window;
  const initMap = mW.initMap();
  const mapIsLoaded = mW.mapIsLoaded;
  useEffect(() => {
    if (mapIsLoaded) initMap();
  }, [mapIsLoaded, initMap]);
  return (
    <div className="map-content">
      <button
        onClick={() => setMapBlockActive(prevState => !prevState)}
        className="map-btn"
      >
        ჩვენი მაღაზიები
      </button>
      <div
        className={classnames("map-block", { active: mapBlockActive })}
        data-aos="fade-up"
      >
        <div id="map"></div>
      </div>
    </div>
  );
};
