export const AUTH_BASE_URL = "http://3.15.209.19/api";

export const API_LOGIN_URL = AUTH_BASE_URL + "/login";
export const API_REGISTER_URL = AUTH_BASE_URL + "/register";

export const API_FB_LOGIN_URL = AUTH_BASE_URL + "/auth/provider/facebook";
export const API_GA_LOGIN_URL = AUTH_BASE_URL + "/auth/provider/google";

interface login_endpointParams {
  email: string;
  phone: string;
}
export const login_endpoint = ({ email, phone }: login_endpointParams) => {
  return {
    path: `${AUTH_BASE_URL}/login`,
    method: "POST"
  };
};

interface register_endpointParams {
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}
export const register_endpoint = ({
  email,
  phone
}: register_endpointParams) => {
  return {
    path: `${AUTH_BASE_URL}/register`,
    method: "POST"
  };
};
