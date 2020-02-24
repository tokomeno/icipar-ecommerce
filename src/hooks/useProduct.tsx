import { useState, useEffect } from "react";
import { IProductWithItems } from "../data/product";
import { ProductService } from "../services/product.http";

export const useProduct = (productId: number | string) => {
  const [product, setProduct] = useState<IProductWithItems | null>(null);

  useEffect(() => {
    ProductService.getById(productId)
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
