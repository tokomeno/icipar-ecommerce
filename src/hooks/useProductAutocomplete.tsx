import { useLocation, useHistory } from "react-router-dom";

import { useContext, useState, useCallback, useEffect } from "react";

import { PorductFilterContext } from "../contexts/productFilterContext";

import { IProduct, ProductService } from "../services/product.http";

import { useInput } from "./common/useInput";

import { FETCH_PRODUCTS_URL } from "../api/endpoints";

import { routes } from "../routes/routes";
import { ICategory } from "../services/layout.http";

export const useProductAutocomplete = () => {
  const location = useLocation();
  const history = useHistory();
  const { setNewKeyword } = useContext(PorductFilterContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { value: keyword, onChange: setKeyword } = useInput("");
  const [activeTab, setActiveTab] = useState<ICategory | null>(null);

  const resetProducts = useCallback(() => {
    setProducts([]);
  }, [setProducts]);

  useEffect(() => {
    if (!keyword || keyword.trim().length === 0) {
      setProducts([]);
      return;
    }
    const fetching = setTimeout(() => {
      ProductService.fetchProducts(
        FETCH_PRODUCTS_URL,
        {
          keyword: keyword,
          categories: activeTab ? [activeTab.id] : [],
        },
        (res) => {
          setProducts(res.data);
        }
      );
    }, 300);
    return () => {
      clearTimeout(fetching);
    };
  }, [keyword, activeTab]);

  const handleSubmit = () => {
    if (location.pathname === routes.catalog) return;
    setNewKeyword(keyword);

    history.push({ pathname: routes.catalog });
  };

  return {
    handleSubmit,
    resetProducts,
    products,
    keyword,
    setKeyword,
    activeTab,
    setActiveTab,
  };
};
