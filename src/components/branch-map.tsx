import React from "react";
import { IBranch } from "../services/branch.http";
import GoogleMapReact, { Coords } from "google-map-react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { GOOGLE_MAP_API_KEY } from "../consts/services";

export const BranchMap: React.FC<{
  shops: IBranch[];
  centerData: Coords | undefined;
}> = ({ shops, centerData }) => {
  if (shops.length === 0) {
    return null;
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={{
          lat: shops[0] ? parseFloat(shops[0].lat) : 41.716667,
          lng: shops[0] ? parseFloat(shops[0].lng) : 44.783333,
        }}
        center={centerData}
        defaultZoom={14}
      >
        {shops.map((shop, index) => {
          return (
            <MyMarker
              shop={shop}
              key={index}
              lat={parseFloat(shop.lat)}
              lng={parseFloat(shop.lng)}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

const MyMarker: React.FC<{ shop: IBranch; lat: number; lng: number }> = ({
  shop,
}) => {
  return (
    <OverlayTrigger
      key={shop.id}
      placement={"top"}
      overlay={<Tooltip id={shop.id.toString()}>{shop.name}</Tooltip>}
    >
      <img src="/assets/images/mapmarker.svg" alt="" />
    </OverlayTrigger>
  );
};
