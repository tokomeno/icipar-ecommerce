import { useState, useEffect } from "react";
import { axiosWithToken } from "../api/axios-with-token";
import { AMOUNT_COUPONS, DISCOUNT_COUPONS } from "../api/endpoints";

export interface IAmountCoupon {
  amount_spent: number;
  status: "active" | string;
  valid_for: string;
  code: string;

  validity_date: string;
  amount_left: 50;
}

export interface IDiscountCoupon {
  amount_spent: number;
  status: "active" | string;
  valid_for: string;
  code: string;

  days_left: string;
  validity_date: string;
  rate: number;
}

export const useCoupons = () => {
  const [amountCoupons, setAmountCoupons] = useState<IAmountCoupon[] | null>(
    null
  );
  const [discountCoupons, setDiscountCoupons] = useState<
    IDiscountCoupon[] | null
  >(null);

  useEffect(() => {
    axiosWithToken
      .get<{ data: IAmountCoupon[] }>(AMOUNT_COUPONS)
      .then((res) => {
        setAmountCoupons(res.data.data);
      });

    axiosWithToken
      .get<{ data: IDiscountCoupon[] }>(DISCOUNT_COUPONS)
      .then((res) => {
        setDiscountCoupons(res.data.data);
      });
  }, []);

  return {
    amountCoupons,
    discountCoupons,
  };
};
