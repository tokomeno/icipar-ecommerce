export const routes = {
  home: "/",
  aboutUs: "/page/about-us",
  howItWorks: "/page/how-it-works",
  faq: "/page/faq",

  contact: "/contact",
  shops: "/shops",
  allBrands: "/all-brands",
  brandShow: (slug: string) => {
    return `/brand/${slug}`;
  },
  catalog: "/catalog",

  giftCard: "/gift-card",
  productShow: (id: string | number) => {
    return `/product/${id}`;
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

  blogs: "/blogs",
  blogShow: "/blogs/:slug",
  staticPages: "/page/:slug"
};
