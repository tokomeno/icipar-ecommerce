import React, { useState } from "react";

import { PageSideMenu } from "../../components/pageSideMenu";
import { EmailService } from "../../services/email.http";
import { useInput } from "../../hooks/common/useInput";
import { useErrors } from "../../hooks/common/useErrors";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";

import { ReCaptcha } from "react-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from "../../consts/services";
import { useCaptcha } from "../../hooks/useCaptcha";
interface ContactPageProps {
  contact_info: IStoreState["info"]["contact_info"];
  socials: IStoreState["info"]["socials"];
}

const _ContactPage: React.FC<ContactPageProps> = ({
  contact_info,
  socials
}) => {
  const { t } = useTranslation();
  const facebook = socials.find(i => i.social === "facebook");
  const google = socials.find(i => i.social === "google");
  const instagram = socials.find(i => i.social === "instagram");
  const { errors, setErrors } = useErrors<{
    email?: string[];
    message?: string[];
    name?: string[];
    phone?: string[];
    recaptcha_token?: string[];
  }>({});
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const myCaptcha = useCaptcha();

  const emailHandler = useInput("", () => {
    setErrors(prev => {
      const { email, ...restPrev } = prev;
      return restPrev;
    });
  });
  const messageHandler = useInput("", () => {
    setErrors(prev => {
      const { message, ...restPrev } = prev;
      return restPrev;
    });
  });
  const phoneHandler = useInput("", () => {
    setErrors(prev => {
      const { phone, ...restPrev } = prev;
      return restPrev;
    });
  });
  const nameHandler = useInput("", () => {
    setErrors(prev => {
      const { name, ...restPrev } = prev;
      return restPrev;
    });
  });

  const handleSubmit = () => {
    EmailService.saveContact({
      email: emailHandler.value,
      message: messageHandler.value,
      phone: phoneHandler.value,
      name: nameHandler.value,
      recaptcha_token: myCaptcha.recaptcha_token
    })
      .then(res => {
        setErrors({});
        emailHandler.onChange("");
        messageHandler.onChange("");
        phoneHandler.onChange("");
        nameHandler.onChange("");
        setSuccessMessage(true);
      })
      .catch(err => {
        setSuccessMessage(false);
        if (err.response.data && typeof err.response.data === "object") {
          setErrors(err.response.data);
        } else {
          console.error(err);
        }
      });
  };
  return (
    <>
      <div className="container">
        <div className="about row">
          <PageSideMenu />
          <div className="col-lg-9">
            <div className="right">
              <div className="top">
                <h1 className="title">{t("contact")}</h1>
              </div>
              <div className="desc">
                <div className="contact row">
                  <div className="col-md-6">
                    <form>
                      <label htmlFor="name">{t("name")}</label>
                      <input
                        type="text"
                        id="name"
                        {...nameHandler}
                        placeholder=""
                      />
                      {errors.name && Array.isArray(errors.name) && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                      <label htmlFor="email">{t("email")}</label>
                      <input
                        {...emailHandler}
                        type="text"
                        id="email"
                        placeholder=""
                      />
                      {errors.email && Array.isArray(errors.email) && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                      <label htmlFor="mobile">{t("phone")}</label>
                      <input
                        {...phoneHandler}
                        type="text"
                        id="mobile"
                        placeholder=""
                      />
                      {errors.phone && Array.isArray(errors.phone) && (
                        <p className="text-danger">{errors.phone}</p>
                      )}
                      <label htmlFor="text">{t("message")}</label>
                      <textarea {...messageHandler} id="text" />
                      {errors.message && Array.isArray(errors.message) && (
                        <p className="text-danger">{errors.message}</p>
                      )}

                      <ReCaptcha
                        sitekey={RECAPTCHA_SITE_KEY}
                        action="contact"
                        verifyCallback={token => {
                          myCaptcha.setRecaptchaToken(token);
                        }}
                      />
                      {errors.recaptcha_token &&
                        Array.isArray(errors.recaptcha_token) && (
                          <p className="text-danger">
                            {errors.recaptcha_token}
                          </p>
                        )}

                      <div className="d-flex btns">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="send btn"
                        >
                          {t("submit")}
                        </button>
                        {/* <button
                          type="button"
                          onClick={handleSubmit}
                          className="cancel btn"
                        >
                          გაუქმება
                        </button> */}
                      </div>
                      {successMessage && (
                        <p className="text-success">
                          {t("contact_success_message")}
                        </p>
                      )}
                    </form>
                  </div>
                  <div className="col-md-6 d-flex align-items-center flex-column">
                    <a
                      href={"tel:" + contact_info.phone}
                      className="contact-btn d-flex"
                    >
                      <img src="images/contact-btn.svg" alt="" />
                      {contact_info.phone}
                    </a>
                    <a
                      href="mailto:info@prestige.ge "
                      className="contact-btn d-flex"
                    >
                      <img src="images/email.svg" alt="" />
                      {contact_info.email}
                    </a>
                    <div className="soc d-flex">
                      <a
                        href={facebook && facebook.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soc-item d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href={instagram && instagram.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soc-item d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        href={google && google.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soc-item d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-google" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ info }: IStoreState) => {
  return {
    contact_info: info.contact_info,
    socials: info.socials
  };
};

export const ContactPage = connect(mapStateToProps)(_ContactPage);
