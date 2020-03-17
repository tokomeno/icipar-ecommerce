import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInput } from "../../../hooks/common/useInput";
import { AddressService, ICity } from "../../../services/address.http";
import { ProfileInput } from "../../../components/profile-input";
import { IFormAdreess } from "./address-profile";
import { useToggle } from "../../../hooks/common/useToggle";

interface AddressFormProps {
  address: IFormAdreess;
  deleteAddress: (id: string) => void;
  cities: ICity[];
}

export const AddressForm: React.FC<AddressFormProps> = ({
  address,
  cities,
  deleteAddress
}) => {
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const { t } = useTranslation();

  const { value: city_id, onChange: setcity_id } = useInput(
    address.city_id || ""
  );
  const { value: full_address, onChange: setfull_address } = useInput(
    address.full_address || ""
  );
  const { value: comment, onChange: setcomment } = useInput(
    address.comment || ""
  );
  const {
    value: contact_person_name,
    onChange: setcontact_person_name
  } = useInput(address.contact_person_name || "");
  const {
    value: contact_person_email,
    onChange: setcontact_person_email
  } = useInput(address.contact_person_email || "");
  const {
    value: contact_person_phone,
    onChange: setcontact_person_phone
  } = useInput(address.contact_person_phone || "");

  const { isActive: isMain, toggle: toggleMain } = useToggle(
    address.is_main || false
  );

  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const handleSubmit = () => {
    AddressService.createOrUpdate({
      id: address.id,
      city_id,
      full_address,
      comment,
      contact_person_name,
      contact_person_email,
      contact_person_phone,
      is_main: isMain
    })
      .then(res => {
        setErrors({});
        setSuccessMessage(t("address_saved_successfully"));
      })
      .catch(err => {
        setSuccessMessage(null);
        if (err.response && err.response.data && err.response.data.error) {
          setErrors(err.response.data.error);
        } else {
          alert("დაფიქსირდა შეცდომა");
        }
        console.log(err);
      });
  };

  const setInputsFromOriginalData = () => {
    setcity_id(address.city_id);
    setfull_address(address.full_address);
    setcomment(address.comment);
    setcontact_person_name(address.contact_person_name);
    setcontact_person_email(address.contact_person_email);
    setcontact_person_phone(address.contact_person_phone);
  };

  useEffect(() => {
    setInputsFromOriginalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <form className="info">
      <div className="row">
        <div className="col-sm-6">
          <div className="d-flex flex-column info-item">
            <label>{t("city")}</label>
            <select
              onChange={setcity_id}
              value={city_id || ""}
              className="custom-select"
            >
              <option>{t("choose_city")}</option>
              {cities.map(city => (
                <option key={city.id} value={city.id}>
                  {city.city}
                </option>
              ))}
            </select>
            {errors && errors.city_id && errors.city_id[0] && (
              <span className="text-danger pl-5">{errors.city_id[0]}</span>
            )}
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
          <div className="d-flex flex-column info-item invoice">
            <br />
            <label className="invoice-txt">
              <input
                type="checkbox"
                className="hide"
                checked={isMain}
                onChange={toggleMain}
              />
              <span className="checkmark" />
              {t("main_address")}
            </label>
            <br />
          </div>
          {/* </div> */}
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
        <button
          type="button"
          onClick={() => {
            console.log(address);
            deleteAddress(address.uniqueId);
          }}
          className="cancel info-btns_btn"
        >
          {t("delete")}
        </button>
      </div>
      {successMessage && <span className="text-success">{successMessage}</span>}
    </form>
  );
};
