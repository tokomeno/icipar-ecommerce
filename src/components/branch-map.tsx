import React from "react";
import { IBranch } from "../services/branch.http";
import GoogleMapReact from "google-map-react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { GOOGLE_MAP_API_KEY } from "../consts/services";

export const BranchMap: React.FC<{ shops: IBranch[] }> = ({ shops }) => {
  if (shops.length === 0) {
    return null;
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={{
          lat: shops[0] ? parseFloat(shops[0].lat) : 41.716667,
          lng: shops[0] ? parseFloat(shops[0].lng) : 44.783333
        }}
        defaultZoom={14}
      >
        {shops.map((shop: any) => {
          return (
            <MyMarker
              shop={shop}
              key={shop.id}
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
  shop
}) => {
  return (
    <OverlayTrigger
      key={shop.id}
      placement={"top"}
      overlay={<Tooltip id={shop.id}>{shop.name}</Tooltip>}
    >
      <img src="/assets/images/mapmarker.svg" alt="" />
    </OverlayTrigger>
  );
};
