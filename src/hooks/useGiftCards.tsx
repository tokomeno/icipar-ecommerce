import { useState, useEffect } from "react";
import { axiosWithToken } from "../api/axios-with-token";
import { GIFT_CARD, DISCOUNT_CARD } from "../api/endpoints";

export interface IGiftCard {
  code: string;
  amount_left: number;
  status: "active" | string;
}

export interface IDiscountCard {
  date: string;
  total_amount_spent: number;
  discount_rate_earned: number;
}

export const useGiftCards = () => {
  const [giftCard, setGiftCard] = useState<IGiftCard[] | null>(null);
  const [discountGiftCard, setDiscountGiftCard] = useState<
    IDiscountCard[] | null
  >(null);

  useEffect(() => {
    axiosWithToken.get<{ data: IGiftCard[] }>(GIFT_CARD).then(res => {
      setGiftCard(res.data.data);
    });

    axiosWithToken
      .get<{ data: { discount_card_history: IDiscountCard[] } }>(DISCOUNT_CARD)
      .then(res => {
        setDiscountGiftCard(res.data.data.discount_card_history);
      });
  }, []);

  return {
    giftCard,
    discountGiftCard
  };
};
