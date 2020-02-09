import React, { useEffect, useState } from "react";
import { ProfileBasePage } from "../index";
import { useTranslation } from "react-i18next";
import { axiosWithToken } from "../../../api/axios-with-token";
import { GET_USER_ADDRESSES, SET_USER_ADDRESSES } from "../../../api/endpoints";
import { useInput } from "../../../hooks/common/useInput";
import { ProfileInput } from "../../../components/profile-input";

interface AddressProiflePageProps {}

export const AddressProiflePage: React.FC<AddressProiflePageProps> = props => {
  const { t } = useTranslation();

  const [cities, setCities] = useState<{ id: number; city: string }[]>([]);
  const { value: city_id, onChange: setcity_id } = useInput();
  const { value: full_address, onChange: setfull_address } = useInput();
  const { value: comment, onChange: setcomment } = useInput();
  const {
    value: contact_person_name,
    onChange: setcontact_person_name
  } = useInput();
  const {
    value: contact_person_email,
    onChange: setcontact_person_email
  } = useInput();
  const {
    value: contact_person_phone,
    onChange: setcontact_person_phone
  } = useInput();

  const [originalData, setOriginalData] = useState<{
    [key: string]: string | undefined;
  }>({});

  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const handleSubmit = () => {
    axiosWithToken
      .post(SET_USER_ADDRESSES, {
        city_id,
        full_address,
        comment,
        contact_person_name,
        contact_person_email,
        contact_person_phone
      })
      .then(res => {
        setOriginalData(res.data.data);
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.error) {
          setErrors(err.response.data.error);
        } else {
          alert("დაფიქსირდა შეცდომა");
        }
        console.log(err);
      });
  };

  useEffect(() => {
    setInputsFromOriginalData();
  }, [originalData]);

  const setInputsFromOriginalData = () => {
    setcity_id(originalData.city_id);
    setfull_address(originalData.full_address);
    setcomment(originalData.comment);
    setcontact_person_name(originalData.contact_person_name);
    setcontact_person_email(originalData.contact_person_email);
    setcontact_person_phone(originalData.contact_person_phone);
  };

  useEffect(() => {
    axiosWithToken.get(GET_USER_ADDRESSES).then(res => {
      if (
        res.data.data.addresses &&
        res.data.data.addresses[0] &&
        typeof res.data.data.addresses[0] === "object"
      ) {
        setOriginalData(res.data.data.addresses[0]);
      }
      setCities(res.data.data.cities);
    });
  }, []);

  return (
    <ProfileBasePage>
      <div className="profile-right profile-side table-profile">
        <div className="profile-top">
          <div className="row">
            {/* <div className="col-sm-6">
              <h1 className="profile-top_title">
                {t("add_new")}
                <a href="#!" className="delete">
                  {t("delete")}
                </a>
              </h1>
            </div> */}
            <div className="col-sm-6">
              <h2 className="profile-top_title d-none d-sm-block">
                {t("addresses")}
              </h2>
            </div>
          </div>
        </div>
        <form className="info">
          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex flex-column info-item">
                <label>{t("city")}</label>
                <select
                  onChange={setcity_id}
                  value={city_id}
                  className="custom-select"
                >
                  <option selected>{t("choose_city")}</option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>
                      {city.city}
                    </option>
                  ))}
                </select>
              </div>

              <ProfileInput
                label={t("full_address")}
                name={"full_address"}
                value={full_address}
                onChange={setfull_address}
                errorMessage={
                  errors && errors.full_address && errors.full_address[0]
                }
              />
              <ProfileInput
                label={t("comment")}
                name={"comment"}
                value={comment}
                onChange={setcomment}
                errorMessage={errors && errors.comment && errors.comment[0]}
              />
            </div>
            <div className="col-sm-6">
              <ProfileInput
                label={t("contact_person_name")}
                name={"contact_person_name"}
                value={contact_person_name}
                onChange={setcontact_person_name}
                errorMessage={
                  errors &&
                  errors.contact_person_name &&
                  errors.contact_person_name[0]
                }
              />

              <ProfileInput
                label={t("contact_person_phone")}
                name={"contact_person_phone"}
                value={contact_person_phone}
                onChange={setcontact_person_phone}
                errorMessage={
                  errors &&
                  errors.contact_person_phone &&
                  errors.contact_person_phone[0]
                }
              />

              <ProfileInput
                label={t("contact_person_email")}
                name={"contact_person_email"}
                value={contact_person_email}
                onChange={setcontact_person_email}
                errorMessage={
                  errors &&
                  errors.contact_person_email &&
                  errors.contact_person_email[0]
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
              {t("cancel")}
            </button>
          </div>
        </form>
      </div>
      ;
    </ProfileBasePage>
  );
};
