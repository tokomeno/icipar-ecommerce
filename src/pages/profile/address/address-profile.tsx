import React, { useCallback } from "react";
import { ProfileBasePage } from "../index";
import { useTranslation } from "react-i18next";

import { AddressService, IAddress } from "../../../services/address.http";
import { AddressForm } from "./address-form";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";
import { useAddresses } from "../../../hooks/useAddresses";

interface AddressProiflePageProps {}

export const AddressProiflePage: React.FC<AddressProiflePageProps> = props => {
  const { cities, addresses, setAddresses } = useAddresses();

  const { t } = useTranslation();

  const deleteAddress = useCallback(
    (id: number) => {
      if (!Array.isArray(addresses)) return;
      const deleteAddress = addresses.find(a => a.id === id);
      if (!deleteAddress) return;

      AddressService.delete(deleteAddress.id).then(res => {
        setAddresses(prevState =>
          prevState!.filter(ad => ad.id !== deleteAddress.id)
        );
      });
    },
    [addresses, setAddresses]
  );

  const onNewAddressSave = useCallback(
    (address: IAddress) => {
      console.log(address);
      setAddresses(prev => {
        if (prev) return [...prev, { ...address }];
        return [address];
      });
    },
    [setAddresses]
  );
  const makeMainAddress = (id: number) => {
    AddressService.makeMain(id).then(res => {
      setAddresses(prev => {
        if (!prev) return prev;
        return prev.map(a => ({ ...a, is_main: a.id === id }));
      });
    });
  };

  const getAddressText = useCallback(
    (id: number) => {
      if (!addresses || !cities) return;
      const address = addresses.find(a => a.id === id);
      if (!address) return;
      // eslint-disable-next-line eqeqeq
      const city = cities.find(c => c.id == address.city_id);
      let text = "";
      if (city && city.city) text += city.city;
      if (address.full_address) text += ", " + address.full_address;
      if (address.contact_person_name)
        text += ", " + address.contact_person_name;
      if (address.contact_person_phone)
        text += ", " + address.contact_person_phone;
      if (address.contact_person_email)
        text += ", " + address.contact_person_email;
      return text;
    },
    [addresses, cities]
  );

  if (!addresses || !cities) return <ProfileSpinner />;
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side table-profile">
        <div className="profile-top">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="profile-top_title">{t("add_new")}</h1>
            </div>
            <div className="col-sm-6">
              <h2 className="profile-top_title d-none d-sm-block">
                {t("addresses")}
              </h2>
            </div>
          </div>
        </div>
        <form className="info">
          <div className="row">
            <AddressForm cities={cities} onNewAddressSave={onNewAddressSave} />
            <div className="col-sm-6">
              {addresses.map(address => (
                <div key={address.id} className="d-flex flex-column info-item">
                  <label className="d-flex" htmlFor="loc">
                    {address.is_main && (
                      <p className="text-danger pr-3">{t("main")} </p>
                    )}
                    {address.full_address}
                  </label>
                  <div className="address_textarea_wrapper">
                    <textarea
                      readOnly={true}
                      placeholder={getAddressText(address.id)}
                    />
                    <div className="address-hover_section">
                      <button
                        type="button"
                        onClick={() => deleteAddress(address.id)}
                        className="save info-btns_btn"
                      >
                        {t("delete")}
                      </button>
                      <button
                        type="button"
                        onClick={() => makeMainAddress(address.id)}
                        className="save info-btns_btn"
                      >
                        {t("make_main_address")}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </ProfileBasePage>
  );
};
