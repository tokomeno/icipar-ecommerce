import React, { useEffect, useState } from "react";
import { ProfileBasePage } from "../index";
import { useInput } from "../../../hooks/common/useInput";
import { useTranslation } from "react-i18next";
import { axiosWithToken } from "../../../api/axios-with-token";
import { UPDATE_CUSTOMER_INFO } from "../../../api/endpoints";
import { ProfileInput } from "../../../components/profile-input";
import { useLoader } from "../../../hooks/common/useLoader";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";
import { CustomerService } from "../../../services/customer.http";

interface InfoProfilePageProps {}

export const InfoProfilePage: React.FC<InfoProfilePageProps> = (props) => {
  const { t } = useTranslation();
  const { isLoading, stopLoading } = useLoader(true);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { value: name, onChange: setName } = useInput();
  const { value: surname, onChange: setSurname } = useInput();
  const { value: email, onChange: setEmail } = useInput();
  const { value: phone, onChange: setPhone } = useInput();
  const { value: id_number, onChange: setId_number } = useInput();
  const { value: birth_date, onChange: setBirth_date } = useInput();
  const { value: old_password, onChange: setOld_password } = useInput();
  const { value: new_password, onChange: setNew_password } = useInput();
  const {
    value: new_password_confirmation,
    onChange: setConfirm_password,
  } = useInput();

  const [originalData, setOriginalData] = useState<{
    [key: string]: string | undefined;
  }>({});

  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const handleSubmit = () => {
    axiosWithToken
      .post(UPDATE_CUSTOMER_INFO, {
        name,
        surname,
        email,
        phone,
        id_number,
        birth_date,
        old_password,
        new_password,
        new_password_confirmation,
      })
      .then((res) => {
        setSuccessMessage(t("profile_info_updated"));
        setErrors({});
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          setErrors(err.response.data.error);
        } else {
          alert("დაფიქსირდა შეცდომა");
        }
        console.log(err);
      });
  };
  const setInputsFromOriginalData = () => {
    setName(originalData.name);
    setSurname(originalData.surname);
    setEmail(originalData.email);
    setPhone(originalData.phone);
    setId_number(originalData.id_number);
    setBirth_date(originalData.birth_date);
  };

  useEffect(() => {
    setInputsFromOriginalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalData]);

  useEffect(() => {
    CustomerService.getCustomer()
      .then((res) => {
        if (typeof res.data.data === "object") {
          setOriginalData(res.data.data as any);
          stopLoading();
        }
      })
      .catch((err) => {
        console.log(err);
        alert("დაფიქსირდა შედცომა");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <ProfileSpinner />;
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side table-profile">
        <div className="profile-top">
          <h1 className="profile-top_title">{t("information")}</h1>
        </div>

        {successMessage && (
          <p className="text-success text-center mt-10">{successMessage}</p>
        )}

        <form className="info">
          <div className="row">
            <div className="col-sm-6">
              <ProfileInput
                label={t("name")}
                name={"name"}
                value={name}
                onChange={setName}
                errorMessage={errors && errors.name && errors.name[0]}
              />

              <ProfileInput
                label={t("surname")}
                name={"surname"}
                value={surname}
                onChange={setSurname}
                errorMessage={errors && errors.surname && errors.surname[0]}
              />

              <ProfileInput
                label={t("email")}
                name={"email"}
                value={email}
                onChange={setEmail}
                errorMessage={errors && errors.email && errors.email[0]}
              />

              <ProfileInput
                label={t("phone")}
                name={"phone"}
                value={phone}
                onChange={setPhone}
                errorMessage={errors && errors.phone && errors.phone[0]}
              />

              <ProfileInput
                label={t("id_number")}
                name={"id_number"}
                value={id_number}
                onChange={setId_number}
                errorMessage={errors && errors.id_number && errors.id_number[0]}
              />

              <ProfileInput
                label={t("birth_date")}
                name={"birth_date"}
                value={birth_date}
                onChange={setBirth_date}
                type="date"
                errorMessage={
                  errors && errors.birth_date && errors.birth_date[0]
                }
              />
            </div>
            <div className="col-sm-6">
              <ProfileInput
                label={t("old_password")}
                type="password"
                name={"old_password"}
                value={old_password}
                onChange={setOld_password}
                errorMessage={
                  errors && errors.old_password && errors.old_password[0]
                }
              />
              <ProfileInput
                label={t("new_password")}
                type="password"
                name={"new_password"}
                value={new_password}
                onChange={setNew_password}
                errorMessage={
                  errors && errors.new_password && errors.new_password[0]
                }
              />
              <ProfileInput
                label={t("new_password_confirmation")}
                type="password"
                name={"new_password_confirmation"}
                value={new_password_confirmation}
                onChange={setConfirm_password}
                errorMessage={
                  errors &&
                  errors.new_password_confirmation &&
                  errors.new_password_confirmation[0]
                }
              />
            </div>
          </div>
          <div className="info-btns d-flex justify-content-sm-start justify-content-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="save info-btns_btn"
            >
              {t("save")}
            </button>

            <button
              type="button"
              onClick={setInputsFromOriginalData}
              className="cancel info-btns_btn"
            >
              {t("gauqmeba")}
            </button>
          </div>
        </form>
      </div>
    </ProfileBasePage>
  );
};
