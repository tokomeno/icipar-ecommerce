import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/home-page";
// import { AboutUsPage } from "./pages/about-us/about-us-page";
import { ContactPage } from "./pages/contact/contact-page";
// import { HowItWorksPage } from "./pages/how-it-works/how-it-works-page";
import { ShopPage } from "./pages/shops/shop-page";
import { AboutBrandPage } from "./pages/about-brand/about-brand-page";
import { AllBrandsPage } from "./pages/all-brands/all-brands";
import { CatalogPage } from "./pages/catalog/catalog-page";

import { CouponsPage } from "./pages/profile/coupons/coupons-page";
import { GiftCardPage } from "./pages/gift-card/gift-card-page";
import { CartPage } from "./pages/profile/cart-page/cart-page";
import { GiftCardProfilePage } from "./pages/profile/gift-cart/gift-card-profile";
import { OrdersProfilePage } from "./pages/profile/orders/orders-profile";
import { ProducShowPage } from "./pages/product-show-page/product-show-page";
import { ScropllToTopOnPageChange } from "./scrollToTop";
import { AddressProiflePage } from "./pages/profile/address/address-profile";
import { WishlistProfilePage } from "./pages/profile/wishlist/wishlist-profile-page";
import { ProfilePage } from "./pages/profile/main/MainProfilePage";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import "./langs/i18n";
import { routes } from "./routes/routes";
import { PrivateRoute } from "./routes/privateRoute";
import { tryLocalAuth } from "./tryLocalAuth";
import { InfoProfilePage } from "./pages/profile/info/info-profile";
import { BlogShowPage } from "./pages/blog-show/blog-show";
import { BlogPage } from "./pages/blog/blog-page";
import { store } from "./redux/store";
import {
  fetch_Social_ContactInfo_Branches,
  setLayoutCatogriesAction,
} from "./redux/info/infoActions";
import { StaticPage } from "./pages/static-page/static-page";
import { Layout } from "./layout";
import { loadReCaptcha } from "react-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from "./consts/services";
import { setDefaultLang } from "./langsUtil";
import { PaymentCallbackPage } from "./pages/profile/payment-callback-page/payment-callback-page";
import { ConfirmEmailPage } from "./pages/confirm-email/confirm-email-page";

export const HistoryContext = React.createContext<History>(
  (null as any) as History
);

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

setDefaultLang();
tryLocalAuth();
store.dispatch(fetch_Social_ContactInfo_Branches() as any);
store.dispatch(setLayoutCatogriesAction() as any);

const App: React.FC<{}> = () => {
  useEffect(() => {
    loadReCaptcha(RECAPTCHA_SITE_KEY);
  }, []);
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <ScropllToTopOnPageChange />
        <Layout>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.registerRef} exact component={HomePage} />

            {/* PAGES */}
            {/* <Route path={routes.aboutUs} exact component={AboutUsPage} /> */}
            {/* <Route path={routes.howItWorks} exact component={HowItWorksPage} /> */}
            <Route path={routes.contact} exact component={ContactPage} />
            <Route path={routes.shops} exact component={ShopPage} />
            <Route path={routes.allBrands} exact component={AllBrandsPage} />
            <Route
              path={routes.brandShow(":slug")}
              exact
              component={AboutBrandPage}
            />

            <Route
              path={routes.paymentFail}
              exact
              component={PaymentCallbackPage}
            />
            <Route
              path={routes.paymentSuccess}
              exact
              component={PaymentCallbackPage}
            />

            <Route path={routes.catalog} exact component={CatalogPage} />
            <Route path={routes.giftCard} exact component={GiftCardPage} />
            <Route
              path={routes.productShow(":id")}
              exact
              component={ProducShowPage}
            />

            <Route path={routes.blogShow} exact component={BlogShowPage} />
            <Route path={routes.blogs} exact component={BlogPage} />

            <Route path={routes.staticPages} exact component={StaticPage} />

            <Route path={routes.cart} exact component={CartPage} />
            <Route
              path={routes.confirmEmail}
              exact
              component={ConfirmEmailPage}
            />

            {/* PROFILE PAGES */}
            <PrivateRoute>
              <Route path={routes.profile} exact component={ProfilePage} />
              <Route
                path={routes.profileCoupons}
                exact
                component={CouponsPage}
              />
              <Route path={routes.checkout} exact component={CartPage} />
              <Route path={routes.orders} exact component={OrdersProfilePage} />
              <Route
                path={routes.profileInfo}
                exact
                component={InfoProfilePage}
              />
              <Route
                path={routes.profileAddress}
                exact
                component={AddressProiflePage}
              />
              <Route
                path={routes.favorites}
                exact
                component={WishlistProfilePage}
              />
              <Route
                path={routes.profileGiftCard}
                exact
                component={GiftCardProfilePage}
              />
            </PrivateRoute>
          </Switch>
        </Layout>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export { App };
