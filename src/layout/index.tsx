import React from "react";
import { SearchNav } from "./Header/searchNav";
import { BurgerNav } from "./Header/buergerNav";
import { Header } from "./Header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <SearchNav />
      <BurgerNav />
      <Header />
      {children}
    </React.Fragment>
  );
};
