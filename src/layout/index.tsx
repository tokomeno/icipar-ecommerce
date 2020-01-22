import React from "react";
import { SearchNav } from "./header/searchNav";
import { BurgerNav } from "./header/buergerNav";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { MapComponent } from "./map/map";
import { RegisterLogin } from "../components/register-login";
import { ActiveModalProvider } from "../contexts/modalContex";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <ActiveModalProvider>
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
        <RegisterLogin />
      </ActiveModalProvider>
    </React.Fragment>
  );
};
