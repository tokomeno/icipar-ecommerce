import React from "react";
import { SearchNav } from "./header/searchNav";
import { BurgerNav } from "./header/buergerNav";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      {/* <SearchNav />
      <BurgerNav />
      <Header /> */}
      <main className="site__content">{children}</main>
      <Footer />
    </React.Fragment>
  );
};
