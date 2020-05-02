import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useInput } from "../../../hooks/common/useInput";
import {
  AddressService,
  ICity,
  IAddress,
} from "../../../services/address.http";
import { ProfileInput } from "../../../components/profile-input";
import { useToggle } from "../../../hooks/common/useToggle";

export type IFormAdreess = Omit<IAddress, "id" | "city_id"> & {
  uniqueId: string;
  id: number | null;
  city_id: number | "";
};

interface AddressFormProps {
  cities: ICity[];
  onNewAddressSave: (id: IAddress) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  cities,
  onNewAddressSave,
}) => {
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const { t } = useTranslation();

  const { value: city_id, onChange: setcity_id } = useInput("");
  const { value: full_address, onChange: setfull_address } = useInput("");
  const { value: comment, onChange: setcomment } = useInput("");
  const {
    value: contact_person_name,
    onChange: setcontact_person_name,
  } = useInput("");
  const {
    value: contact_person_email,
    onChange: setcontact_person_email,
  } = useInput("");
  const {
    value: contact_person_phone,
    onChange: setcontact_person_phone,
  } = useInput("");

  const { isActive: isMain } = useToggle(false);

  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const handleSubmit = () => {
    AddressService.createOrUpdate({
      id: null,
      city_id,
      full_address,
      comment,
      contact_person_name,
      contact_person_email,
      contact_person_phone,
      is_main: isMain,
    })
      .then((res) => {
        setErrors({});
        setSuccessMessage(t("address_saved_successfully"));
        onNewAddressSave(res.data.data);
      })
      .catch((err) => {
        setSuccessMessage(null);
        if (err.response && err.response.data && err.response.data.error) {
          setErrors(err.response.data.error);
        } else {
          alert("დაფიქსირდა შეცდომა");
        }
        console.log(err);
      });
  };

  const clearForm = () => {
    setcity_id("");
    setfull_address("");
    setcomment("");
    setcontact_person_name("");
    setcontact_person_email("");
    setcontact_person_phone("");
  };

  return (
    <div className="col-sm-6">
      <div className="d-flex flex-column info-item">
        <label>{t("city")}</label>
        <select
          onChange={setcity_id}
          value={city_id || ""}
          className="custom-select"
        >
          <option>{t("choose_city")}</option>
          {cities.map((city) => (
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
        errorMessage={errors && errors.full_address && errors.full_address[0]}
      />
      <ProfileInput
        label={t("comment")}
        name={"comment"}
        value={comment}
        onChange={setcomment}
        errorMessage={errors && errors.comment && errors.comment[0]}
      />

      <ProfileInput
        label={t("contact_person_name")}
        name={"contact_person_name"}
        value={contact_person_name}
        onChange={setcontact_person_name}
        errorMessage={
          errors && errors.contact_person_name && errors.contact_person_name[0]
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

      {/* <div className="d-flex flex-column info-item invoice">
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
      </div> */}
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
          onClick={clearForm}
          className="cancel info-btns_btn"
        >
          {t("cancel")}
        </button>
      </div>
      {successMessage && <span className="text-success">{successMessage}</span>}
    </div>
  );
};
