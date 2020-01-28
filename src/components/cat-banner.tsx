import React from "react";
import { NavLink } from "react-router-dom";

interface CatBannerProps {
  to: string;
  image: string;
}

export const CatBanner: React.FC<CatBannerProps> = ({ to, image }) => {
  return (
    <div className="cat-banner">
      <NavLink to={to} className="d-block">
        <img src={image} alt="" />
      </NavLink>
    </div>
  );
};
