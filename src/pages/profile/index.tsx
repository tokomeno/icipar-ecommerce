import React, { useState } from "react";

import { ProfileLeft } from "../../components/profile-left/profile-left";
import { connect } from "react-redux";
import { IUser } from "../../redux/auth/authTypes";
import {
  logoutUser,
  userHasSubscribedToNews,
} from "../../redux/auth/authActions";
import { IStoreState } from "../../redux/mainReducer";
import { useLocation } from "react-router-dom";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { useInput } from "../../hooks/common/useInput";
import { EmailService } from "../../services/email.http";
import { CouponModal } from "../../components/coupon-modal";
import { useToggle } from "../../hooks/common/useToggle";

interface ProfileBasePageProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
  user: IUser | null;
  logoutUser: typeof logoutUser;
}

const _ProfileBasePage: React.FC<ProfileBasePageProps> = ({
  children,
  modal,
  logoutUser,
  user,
}) => {
  const location = useLocation();

  const {
    isActive: showCouoponModal,
    setInActive: hideCouponModal,
  } = useToggle(true);
  const {
    isActive: showNewsLetterPopup,
    setInActive: hideNewsLetterPopup,
  } = useToggle(true);

  return (
    <>
      {modal}
      {user && !user.is_subscribed && showNewsLetterPopup && (
        <SubscirbeNewsLetterPopUp hide={hideNewsLetterPopup} />
      )}
      {user && !user.has_filled_profile && showCouoponModal && (
        <CouponModal hide={hideCouponModal} />
      )}
      <div className="container">
        <div
          className={classnames("profile", {
            shoppingCart: location.pathname !== "/profile",
          })}
        >
          <div className="d-flex">
            {user && <ProfileLeft user={user} logout={logoutUser} />}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ auth }: IStoreState) => ({
  user: auth.user as IUser,
});

export const ProfileBasePage = connect(mapStateToProps, { logoutUser })(
  _ProfileBasePage
);

/////////////////////////////////////////////////////////////

const _SubscirbeNewsLetterPopUp: React.FC<{
  userHasSubscribedToNews: typeof userHasSubscribedToNews;
  hide: () => void;
}> = ({ userHasSubscribedToNews, hide }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [, setSuccessMessage] = useState<string | null>(null);
  const { t } = useTranslation();
  const inputHandler = useInput("");
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    EmailService.subscribe(inputHandler.value)
      .then((res) => {
        setErrorMessage(null);
        setSuccessMessage(t("you_have_subscribed"));
        userHasSubscribedToNews();
        setTimeout(() => {
          setSuccessMessage(null);
        }, 2000);
      })
      .catch((err) => {
        if (Array.isArray(err.response.data.email)) {
          setErrorMessage(err.response.data.email.join(" "));
        }
      });
  };

  return (
    <div className="checkout-saleBAnner d-none d-lg-block">
      <button
        onClick={hide}
        className="close-sale d-flex align-items-center justify-content-center"
      >
        <i className="fas fa-times" />
      </button>
      <img src="/assets/images/sale-banner1.png" alt="" />
      <div className="bg text-center">
        <div className="title">{t("get_10_percantage_sael")}</div>
        <div className="txt">{t("subscribe_news")}</div>
        <div className="d-flex justify-content-center">
          <div>
            <input
              type="email"
              className="link"
              {...inputHandler}
              placeholder={t("enter_your_email")}
            />
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
          <button onClick={handleSubmit}>
            <img src="/assets/images/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

const SubscirbeNewsLetterPopUp = connect(null, { userHasSubscribedToNews })(
  _SubscirbeNewsLetterPopUp
);
