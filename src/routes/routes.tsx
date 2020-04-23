export const routes = {
  home: "/",
  registerRef: "/registration",
  aboutUs: "/page/about-us",
  howItWorks: "/page/how-it-works",
  faq: "/page/faq",

  confirmEmail: "/confirm-email",

  contact: "/contact",
  shops: "/shops",
  allBrands: "/all-brands",
  brandShow: (slug: string) => {
    return `/brand/${slug}`;
  },
  catalog: "/catalog",

  giftCard: "/gift-card",
  productShow: (id: string | number) => {
    return `/product/${id}/:slug`;
  },

  paymentSuccess: "/payment/success",
  paymentFail: "/payment/fail",

  favorites: "/profile/favorites",
  orders: "/profile/orders",
  profile: "/profile",
  checkout: "/profile/checkout",
  profileInfo: "/profile/info",
  profileAddress: "/profile/address",
  cart: "/profile/cart",
  profileCoupons: "/profile/coupons",
  profileGiftCard: "/profile/gift-cards",

  blogs: "/blogs",
  blogShow: "/blogs/:slug",
  staticPages: "/page/:slug",
};
