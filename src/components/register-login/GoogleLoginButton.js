import React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { API_GA_LOGIN_URL } from "../../api/endpoints";
import { GOOGLE_CLIENT_ID } from "../../consts/services";
import { setCurrentUser } from "../../redux/auth/authActions";
import { useTranslation } from "react-i18next";
import axios from "axios";

 
const GaText = () => {
  const {t} = useTranslation()
  return (<div className="txt text-center">{t("ga_auth")}</div>)
}

class GoogleLoginButton extends React.PureComponent {
  responseGoogle = (res) => {
    // console.log(res);
    // const { profileObj } = res;
    // const userData = {
    //   ...res
      // accessToken: res.accessToken,
      // googleId: res.googleId,
      // name: profileObj.givenName,
      // second_name: profileObj.familyName,
      // email: profileObj.email,
      // imageUrl: null
    // };
    axios
    .get(`${API_GA_LOGIN_URL}?token=${res.accessToken}`, { ...res })
    .then(res => {
      setCurrentUser({
        user: res.data.user,
        token: res.data.token
      });
      // hideModal(); TODO: hide modal
    })
    .catch(err => {
      console.log("დაფიქსირდა შეცდომა");
    });
     
  };
  render() {
    return (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={renderProps => (
          <a
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            href="#!"
            className="loginBtn google d-flex align-items-center"
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <i className="fab fa-google" />
            </div>
            <GaText/>
          </a>
        )}
        autoLoad={false}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}



export const GoogleLoginBtn = connect(null, { setCurrentUser })(
  GoogleLoginButton
);
