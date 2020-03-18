// Accounts
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-accounts/1.0
const AUTH_BASE_URL = "http://3.15.209.19/api";

export const GENERIC_USER = AUTH_BASE_URL + "/guest/assign-generic-user";
export const API_LOGIN_URL = AUTH_BASE_URL + "/login";
export const API_REGISTER_URL = AUTH_BASE_URL + "/register";
export const API_FB_LOGIN_URL =
  AUTH_BASE_URL + "/social-login/login-user-by-token/facebook";
export const API_GA_LOGIN_URL =
  AUTH_BASE_URL + "/social-login/login-user-by-token/google";

export const GET_CUSTOMER_INFO = AUTH_BASE_URL + "/get-customer";
export const UPDATE_CUSTOMER_INFO = AUTH_BASE_URL + "/update-user";

export const GET_USER_ADDRESSES = AUTH_BASE_URL + "/user/addresses";
export const ADD_USER_ADDRESSES = AUTH_BASE_URL + "/user/add-address";
export const EDIT_USER_ADDRESSES = AUTH_BASE_URL + "/user/edit-address/";

export const DELETE_USER_ADDRESSES = AUTH_BASE_URL + "/user/delete-address/";
export const ADDRESS_MAKE_MAIN = AUTH_BASE_URL + "/user/make-address-main/";

export const TOGGLE_FAVORITES = AUTH_BASE_URL + "/favourites/toggle";
export const GET_FAVORITES = AUTH_BASE_URL + "/favourites";
export const UPLOAD_AVATAR = AUTH_BASE_URL + "/upload-avatar";
export const CONFIRM_EMAIL = AUTH_BASE_URL + "/confirm-email";
export const CONFIRM_PHONE = AUTH_BASE_URL + "/confirm-phone";

// Products
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-products/1.0.0
export const PRODUCT_BASE_URL = "http://3.18.107.107/api";
export const FETCH_PRODUCTS_URL = PRODUCT_BASE_URL + "/products";
export const FETCH_PRODUCTS_FILTER_DATA = PRODUCT_BASE_URL + "/product-filters";

export const FETCH_PRODUCT_URL = PRODUCT_BASE_URL + "/product";

export const FETCH_BESTSELLER_PRODUCTS =
  PRODUCT_BASE_URL + "/featured-products/bestsellers";

export const FETCH_HOTDEALS_PRODUCTS =
  PRODUCT_BASE_URL + "/featured-products/hot-deals";

export const FETCH_NEWARRIVALS_PRODUCTS =
  PRODUCT_BASE_URL + "/featured-products/new-arrivals";

export const FETCH_DISCOUNTED_PRODUCTS =
  PRODUCT_BASE_URL + "/featured-products/discounted";

export const FEATURED_BRANDS = PRODUCT_BASE_URL + "/featured-brands";
export const ALL_BRANDS = PRODUCT_BASE_URL + "/brands";
export const SHOW_BRAND = PRODUCT_BASE_URL + "/brand/";

export const PRODUCT_BRANCH = PRODUCT_BASE_URL + "/product-branches";
export const GET_BRANCHES = PRODUCT_BASE_URL + "/branches-map";
export const PRODUCT_REVIEW = PRODUCT_BASE_URL + "/product-reviews/store";
export const FETCH_BUNDLE_FOR_ITEM = PRODUCT_BASE_URL + "/item-bundle?item_id=";

export const PRODUCT_OTHERS_BOUGHT =
  PRODUCT_BASE_URL + "/product/others-bought?product_id=";
export const PRODUCT_SIMILAR_TO =
  PRODUCT_BASE_URL + "/product/similar-to?product_id=";
// LAYOUT
export const PRODUCT_CATEGORIES =
  PRODUCT_BASE_URL + "/layout/product-categories";
export const LAYOUT_BRNADS = PRODUCT_BASE_URL + "/layout/brands?category_id=";
export const DAYLY_OFFER = PRODUCT_BASE_URL + "/layout/daily-offer";

// Cart
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-cart/1.0.0
const CART_BATH_URL = "http://13.59.255.224/api";
export const GET_CART = CART_BATH_URL + "/get-cart";
export const CART_TOGGLE = CART_BATH_URL + "/toggle-item";
export const TOGGLE_BUNDLE_CART = CART_BATH_URL + "/toggle-bundle";

export const APPLY_POROMOTION = CART_BATH_URL + "/apply-promotion";

export const ADD_GIFT_CART_TO_CART = CART_BATH_URL + "/new-gift-card/add";
export const REMOVE_GIFT_CART_TO_CART = CART_BATH_URL + "/new-gift-card/remove";

// Promotions
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-promotions/1.0
const DISCOUNT_BASE_URL = "http://3.19.28.160/api";
export const GIFT_CARD = DISCOUNT_BASE_URL + "/gift-cards";
export const DISCOUNT_CARD = DISCOUNT_BASE_URL + "/discount-card";
export const AMOUNT_COUPONS = DISCOUNT_BASE_URL + "/amount-coupons";
export const DISCOUNT_COUPONS = DISCOUNT_BASE_URL + "/discount-coupons";

// MAIN
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-main/1.0.0
//////////////////////////
const MAIN_BASE_URL = "http://18.188.27.23/api";

export const BLOG_SHOW = MAIN_BASE_URL + "/blog/post/";
export const FETCH_BLOGS = MAIN_BASE_URL + "/blog";

export const HOMEPAGE_BLOG_POSTS =
  MAIN_BASE_URL + "/homepage/latest-blog-posts";

export const FETCH_TESTIMONIALS = MAIN_BASE_URL + "/homepage/testimonials";

export const MAIN_CAROUSEL = MAIN_BASE_URL + "/homepage/carousel-items";

export const MAIN_SECITIONS = MAIN_BASE_URL + "/homepage/mainpage-sections";

export const PRODUCT_DELIVERY_TERMS = MAIN_BASE_URL + "/term/delivery_terms";

export const STATIC_PAGE = MAIN_BASE_URL + "/static-page/";

// LAYOUT
export const ADDITIONAL_INFO = MAIN_BASE_URL + "/layout/additional-info";
export const LAYTEST_BLOG_POST = MAIN_BASE_URL + "/layout/latest-blog-post";
export const GETBANNER = MAIN_BASE_URL + "/advertisement/";

// Orders
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-orders/1.0.0
const ORDER_BASE_URL = "http://3.15.172.11/api";
export const GET_ORDERS = ORDER_BASE_URL + "/orders";
export const COMPLAINT_ORDER = ORDER_BASE_URL + "/complaint/store";

export const CONFIRM_ORDER = ORDER_BASE_URL + "/confirm-order";

// EMAIL
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-emails/1.0.0
const BASE_EMAIL_URL = "http://18.222.249.167/api";
export const SUBSCRIBE_EMAIL = BASE_EMAIL_URL + "/subscribe";
export const SAVE_CONTACT = BASE_EMAIL_URL + "/contact";
