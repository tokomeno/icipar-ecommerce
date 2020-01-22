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

        <Route path="/todos" exact component={TodoApp} />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
