import React from "react";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { TodoApp } from "./pages/Todo";
import { AboutUsPage } from "./pages/about-us/aboutUsPage";
import { ContactPage } from "./pages/contact/contact";
import { HowItWorksPage } from "./pages/howItWorks/howItWorks";
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

export const HistoryContext = React.createContext<History>(
  (null as any) as History
);

const App: React.FC<{}> = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* PAGES */}
        <Route path="/about-us" exact component={AboutUsPage} />
        <Route path="/about-brand" exact component={AboutBrandPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/how-it-works" exact component={HowItWorksPage} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/shops" exact component={ShopPage} />
        <Route path="/all-brands" exact component={AllBrandsPage} />
        <Route path="/catalog" exact component={CatalogPage} />
        <Route path="/gift-card" exact component={GiftCardPage} />

        {/* PROFILE PAGES */}
        <Route path="/profile/coupons" exact component={CouponsPage} />
        <Route path="/profile/checkout" exact component={ProfileCheckoutPage} />
        <Route path="/profile/orders" exact component={OrdersProfilePage} />
        <Route
          path="/profile/gift-cards"
          exact
          component={GiftCardProfilePage}
        />

        <Route path="/todos" exact component={TodoApp} />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
