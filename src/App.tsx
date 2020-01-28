import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { TodoApp } from "./pages/Todo";
import { AboutUsPage } from "./pages/about-us/aboutUsPage";
import { ContactPage } from "./pages/contact/contact";
import { HowItWorksPage } from "./pages/how-it-works/how-it-works";
import { ShopPage } from "./pages/shops/shopPage";
import { FaqPage } from "./pages/faq/faqPage";
import { AboutBrandPage } from "./pages/about-brand/about-brand-page";
import { AllBrandsPage } from "./pages/all-brands/all-brands";
import { CatalogPage } from "./pages/catalog/catalog-page";

import { CouponsPage } from "./pages/profile/coupons/coupons-page";
import { GiftCardPage } from "./pages/gift-card/gift-card-page";
import { ProfileCheckoutPage } from "./pages/profile/checkout-page/checkout-page";
import { GiftCardProfilePage } from "./pages/profile/gift-cart/gift-card-profile";
import { OrdersProfilePage } from "./pages/profile/orders/orders-profile";
import { ProducShowPage } from "./pages/product-show/product-show-page";
import { ScrollToTop } from "./scrollToTop";
import { AddressProiflePage } from "./pages/profile/address/address-profile";
import { WishlistProfilePage } from "./pages/profile/wishlist/wishlist-profile-page";
import { ProfilePage } from "./pages/profile/main/MainProfilePage";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import "./langs//i18n";
import { routes } from "./routes/routes";
import { PrivateRoute } from "./routes/privateRoute";

export const HistoryContext = React.createContext<History>(
  (null as any) as History
);

const App: React.FC<{}> = props => {
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          {/* PAGES */}
          <Route path={routes.aboutUs} exact component={AboutUsPage} />
          <Route path={routes.aboutBrand} exact component={AboutBrandPage} />
          <Route path={routes.contact} exact component={ContactPage} />
          <Route path={routes.howItWorks} exact component={HowItWorksPage} />
          <Route path={routes.faq} exact component={FaqPage} />
          <Route path={routes.shops} exact component={ShopPage} />
          <Route path={routes.allBrands} exact component={AllBrandsPage} />
          <Route path={routes.catalog} exact component={CatalogPage} />
          <Route path={routes.giftCard} exact component={GiftCardPage} />
          <Route path={routes.productShow} exact component={ProducShowPage} />

          {/* PROFILE PAGES */}
          <PrivateRoute>
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/profile/coupons" exact component={CouponsPage} />
            <Route
              path="/profile/checkout"
              exact
              component={ProfileCheckoutPage}
            />
            <Route path="/profile/cart" exact component={ProfileCheckoutPage} />
            <Route path="/profile/orders" exact component={OrdersProfilePage} />
            <Route
              path="/profile/address"
              exact
              component={AddressProiflePage}
            />
            <Route
              path="/profile/wishlist"
              exact
              component={WishlistProfilePage}
            />
            <Route
              path="/profile/gift-cards"
              exact
              component={GiftCardProfilePage}
            />
          </PrivateRoute>

          <Route path="/todos" exact component={TodoApp} />
        </Switch>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export { App };
