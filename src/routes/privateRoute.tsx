import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { routes } from "./routes";
import { AuthState } from "../redux/auth/authTypes";

import { connect } from "react-redux";
import { IStoreState } from "../redux/mainReducer";

interface PrivateRouteProps {
  isAuth: AuthState["isAuth"];
}

const _PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuth }) => (
  <Fragment>{isAuth ? children : <Redirect to={routes.home} />}</Fragment>
);

const mapStateToProps = ({ auth }: IStoreState) => {
  return {
    isAuth: auth.isAuth
  };
};

export const PrivateRoute = connect(mapStateToProps)(_PrivateRoute);
