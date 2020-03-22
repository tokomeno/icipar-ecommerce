import { useState, useEffect } from "react";
import { ICity, AddressService, IAddress } from "../services/address.http";
import { v4 as uuidv4 } from "uuid";

export const useAddresses = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [addresses, setAddresses] = useState<IAddress[] | null>(null);
  useEffect(() => {
    AddressService.getAll().then(res => {
      setAddresses(
        res.data.data.addresses.map(a => ({ ...a, uniqueId: uuidv4() }))
      );
      setCities(res.data.data.cities);
    });
  }, []);
  return { cities, addresses, setAddresses };
};
