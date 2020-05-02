import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LayoutService, IBanner } from "../services/layout.http";

interface CatBannerProps {
  id: number;
}

export const CatBanner: React.FC<CatBannerProps> = ({ id = 1 }) => {
  const [banner, setBanner] = useState<IBanner | null>(null);
  useEffect(() => {
    LayoutService.getBanner(id).then((res) => setBanner(res.data.data));
  }, [id]);
  if (!banner) return null;
  return (
    <div className="cat-banner">
      <NavLink to={"#"} className="d-block">
        <img src={banner.image} alt="" />
      </NavLink>
    </div>
  );
};
