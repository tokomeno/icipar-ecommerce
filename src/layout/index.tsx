import React from "react";
import { SearchNav } from "./header/searchNav";
import { BurgerNav } from "./header/buergerNav";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { MapComponent } from "./map/map";
import { RegisterLogin } from "../components/register-login";
import { connect } from "react-redux";
import { IStoreState } from "../redux/mainReducer";
import { AuthState } from "../redux/auth/authTypes";

interface LayoutProps {
  children: React.ReactNode;
  auth: AuthState;
}

const _Layout: React.FC<LayoutProps> = ({ children, auth }) => {
  return (
    <React.Fragment>
      <SearchNav />
      <BurgerNav />
      <Header user={auth.user} />
      <main className="site__content">
        <div className="content">
          {children}
          <MapComponent />
        </div>
      </main>
      <Footer />
      {/* {!auth.isAuth && <RegisterLogin />} */}
      <RegisterLogin />
    </React.Fragment>
  );
};

const mapStateToProps = ({ auth }: IStoreState) => ({
  auth: auth
});
export const Layout = connect(mapStateToProps)(_Layout);
