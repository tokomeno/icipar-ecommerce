import { useState, useEffect } from "react";
import Axios from "axios";
import { FETCH_PRODUCT_URL } from "../api/endpoints";
import { IProductWithItems } from "../data/product";

export const useProduct = (productId: number) => {
  const [product, setProduct] = useState<IProductWithItems | null>(null);

  useEffect(() => {
    Axios.get<{ data: IProductWithItems }>(
      `${FETCH_PRODUCT_URL}?id=${productId}`
    )
      .then(res => {
        if (res.data.data) {
          setProduct(res.data.data);
        }
      })
      .catch(err => {
        alert("დაფიქსირდა შეცდომა");
        console.log(err);
      });
  }, [productId]);

  return {
    product
  };
};
