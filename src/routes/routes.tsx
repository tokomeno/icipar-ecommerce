export const routes = {
  home: "/",
  aboutUs: "/page/about-us",
  howItWorks: "/page/how-it-works",
  faq: "/page/faq",

  aboutBrand: "/about-brand",
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

  favorites: "/profile/favorites",
  orders: "profile/orders",

  blogs: "/blogs",
  blogShow: "/blogs/:slug",
  staticPages: "/page/:slug"
};
