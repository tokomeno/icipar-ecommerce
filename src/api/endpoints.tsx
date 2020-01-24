const baseUrl = "http://3.15.209.19/api";

export const API_LOGIN_URL = baseUrl + "login";

interface login_endpointParams {
  email: string;
  phone: string;
}
export const login_endpoint = ({ email, phone }: login_endpointParams) => {
  return {
    path: `${baseUrl}/login`,
    method: "POST"
  };
};

interface register_endpointParams {
  email: string;
  phone: string;
  password: string;
  c_password: string;
}
export const register_endpoint = ({
  email,
  phone
}: register_endpointParams) => {
  return {
    path: `${baseUrl}/register`,
    method: "POST"
  };
};
