import React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { API_GA_LOGIN_URL } from "../../api/endpoints";
import { GOOGLE_CLIENT_ID } from "../../consts";
import { setCurrentUser } from "../../redux/auth/authActions";
import Axios from "axios";

interface GoogleLoginButtonProps {
  setCurrentUser: typeof setCurrentUser;
}

class GoogleLoginButton extends React.Component<GoogleLoginButtonProps> {
  responseGoogle = (res: any) => {
    console.log(res);
    const { profileObj } = res;
    console.log(res);
    const userData = {
      ...res
      // accessToken: res.accessToken,
      // googleId: res.googleId,
      // name: profileObj.givenName,
      // second_name: profileObj.familyName,
      // email: profileObj.email,
      // imageUrl: null
    };
    Axios.post(API_GA_LOGIN_URL, { userData })
      .then(res => {
        // this.props.setCurrentUser({
        //   user: res.data.user,
        //   token: res.data.token
        // });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={renderProps => (
          <a
            onClick={renderProps.onClick}
            // disabled={renderProps.disabled}
            href="#!"
            className="loginBtn google d-flex align-items-center"
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <i className="fab fa-google" />
            </div>
            <div className="txt text-center">გუგლით ავტორიზაცია</div>
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
