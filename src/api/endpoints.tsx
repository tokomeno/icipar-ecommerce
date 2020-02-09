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
export const SET_USER_ADDRESSES = AUTH_BASE_URL + "/user/add-address";

/////////////////////////////////
export const PRODUCT_BASE_URL = "http://3.18.107.107/api";
export const FETCH_PRODUCTS_URL = PRODUCT_BASE_URL + "/products";
export const FETCH_PRODUCTS_FILTER_DATA = PRODUCT_BASE_URL + "/product-filters";

export const FETCH_PRODUCT_URL = PRODUCT_BASE_URL + "/product";

/////////////////////////////////
const CART_BATH_URL = "http://13.59.255.224/api";
export const CART_TOGGLE = CART_BATH_URL + "/toggle-item";
export const GET_CART = CART_BATH_URL + "/get-cart";

/////////////////////////////////
const DISCOUNT_BASE_URL = "http://3.19.28.160/api";

export const GIFT_CARD = DISCOUNT_BASE_URL + "/gift-cards";
export const DISCOUNT_CARD = DISCOUNT_BASE_URL + "/discount-card";

export const AMOUNT_COUPONS = DISCOUNT_BASE_URL + "/amount-coupons";
export const DISCOUNT_COUPONS = DISCOUNT_BASE_URL + "/discount-coupons";

// Promotions
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-promotions/1.0

// Accounts
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-accounts/1.0

// Products
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-products/1.0.0

// Cart
// https://app.swaggerhub.com/apis-docs/badzaghua/iciparis-cart/1.0.0
