import React, { useEffect, useState, useCallback } from "react";
import { ProfileBasePage } from "../index";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import {
  AddressService,
  ICity,
  IAddress
} from "../../../services/address.http";
import { AddressForm } from "./address-form";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";

export type IFormAdreess = Omit<IAddress, "id" | "city_id"> & {
  uniqueId: string;
  id: number | null;
  city_id: number | "";
};

interface AddressProiflePageProps {}
const dummyAddress = (): IFormAdreess => ({
  is_main: false,
  city_id: "",
  full_address: "",
  comment: "",
  contact_person_name: "",
  contact_person_email: "",
  contact_person_phone: "",
  id: null,
  uniqueId: uuidv4()
});

export const AddressProiflePage: React.FC<AddressProiflePageProps> = props => {
  const [cities, setCities] = useState<ICity[]>([]);

  const [addresses, setAddresses] = useState<IFormAdreess[] | null>(null);

  const { t } = useTranslation();

  const deleteAddress = useCallback(
    (uniqueId: string) => {
      if (!Array.isArray(addresses)) return;
      const deleteAddress = addresses.find(a => a.uniqueId === uniqueId);
      if (!deleteAddress) return;
      if (deleteAddress.id) {
        AddressService.delete(deleteAddress.id).then(res => {
          setAddresses(prevState =>
            prevState!.filter(ad => ad.uniqueId !== uniqueId)
          );
        });
      } else {
        setAddresses(prevState =>
          prevState!.filter(ad => ad.uniqueId !== uniqueId)
        );
      }
    },
    [addresses]
  );
  const addNewAddressForm = useCallback(() => {
    setAddresses(prevState => {
      if (Array.isArray(prevState))
        return [...prevState, { ...dummyAddress() }];
      return [dummyAddress()];
    });
  }, []);

  useEffect(() => {
    AddressService.getAll().then(res => {
      setAddresses(
        res.data.data.addresses.map(a => ({ ...a, uniqueId: uuidv4() }))
      );
      setCities(res.data.data.cities);
    });
  }, []);
  if (!addresses) return <ProfileSpinner />;
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side table-profile">
        <div className="profile-top">
          <div className="row">
            <div className="col-sm-6">
              <h1 onClick={addNewAddressForm} className="profile-top_title">
                {t("add_new")}
              </h1>
            </div>
            <div className="col-sm-6">
              <h2 className="profile-top_title d-none d-sm-block">
                {t("addresses")}
              </h2>
            </div>
          </div>
        </div>
        {addresses.map(address => (
          <AddressForm
            key={address.uniqueId}
            cities={cities}
            address={address}
            deleteAddress={deleteAddress}
          />
        ))}
      </div>
    </ProfileBasePage>
  );
};
