import React from "react";
import { SearchNav } from "./header/searchNav";
import { BurgerNav } from "./header/buergerNav";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { MapComponent } from "./map";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <SearchNav />
      <BurgerNav />
      <Header />
      <main className="site__content">
        <div className="content">
          {children}
          <MapComponent />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};
