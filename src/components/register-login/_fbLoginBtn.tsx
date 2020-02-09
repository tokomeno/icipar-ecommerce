import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/auth/authActions";
import { useTranslation } from "react-i18next";
import { API_FB_LOGIN_URL } from "../../api/endpoints";
import { ActiveModalContext } from "../../contexts/modalContex";
import { FACEBOOK_CLIENT_ID } from "../../consts";

interface FbLoginButtonProps {
  setCurrentUser: typeof setCurrentUser;
}

const FbLoginButton: React.FC<FbLoginButtonProps> = ({ setCurrentUser }) => {
  const { t } = useTranslation();
  const { hideModal } = useContext(ActiveModalContext);

  const responseFacebook = (res: any) => {
    const userData = {
      ...res
      //   accessToken: res.accessToken,
      // facebookId: res.userID,
      //   name: res.name,
      //   nickname: res.nickname,
      //   email: res.email,
      //   imageUrl: res.url
    };

    axios
      .post(API_FB_LOGIN_URL, { userData })
      .then(res => {
        // setCurrentUser({
        //   user: res.data.user,
        //   token: res.data.token
        // });
        hideModal();
      })
      .catch(err => {
        console.log("დაფიქსირდა შეცდომა");
      });
  };
  console.log(FACEBOOK_CLIENT_ID);
  return (
    <FacebookLogin
      appId={FACEBOOK_CLIENT_ID as string}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      // render={(renderProps: any) => (
      //   <a
      //     onClick={renderProps.onClick}
      //     href="#!"
      //     className="loginBtn fb d-flex align-items-center"
      //   >
      //     <div className="icon d-flex align-items-center justify-content-center">
      //       <i className="fab fa-facebook" />
      //     </div>
      //     <div className="txt text-center">{t("fb_auth")}</div>
      //   </a>
      // )}
    />
  );
};

export const FbLoginBtn = connect(null, { setCurrentUser })(FbLoginButton);
