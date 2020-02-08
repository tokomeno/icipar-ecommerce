import { useState, useEffect } from "react";
import { axiosWithToken } from "../api/axios-with-token";
import { GIFT_CARD, DISCOUNT_CARD } from "../api/endpoints";

export const useCards = () => {
  const [giftCard, setGiftCard] = useState([]);
  const [discountCard, setDiscountCard] = useState([]);

  useEffect(() => {
    axiosWithToken.get(GIFT_CARD).then(res => {
      setGiftCard(res.data);
    });

    axiosWithToken.get(DISCOUNT_CARD).then(res => {
      setDiscountCard(res.data);
    });
  }, []);

  return {
    giftCard,
    discountCard
  };
};
