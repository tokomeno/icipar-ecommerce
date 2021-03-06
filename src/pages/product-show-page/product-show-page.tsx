import React, { useState, useEffect, useCallback } from "react";

import { BundleProduct } from "../../components/bundle-product/bundle-product";
import { ProductSimpleSlider } from "../../components/sliders/product-simple-slider/product-simple-slider";
import { Reviews } from "../../components/reviews/reviews";
import { ProductContent } from "../../components/product-content/product-content";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../hooks/useProduct";
import { Item } from "./item";
import { match } from "react-router-dom";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { LayoutSpinner } from "../../components/spinners/layout-spinner";
import {
  ProductService,
  IProductWithItems,
  IProduct,
} from "../../services/product.http";
import { ProductHot } from "../../components/product/product-hot";

interface ProducShowPageProps {
  match: match<{ id: string }>;
  product_delivery_terms: string;
}

const _ProducShowPage: React.FC<ProducShowPageProps> = ({
  match,
  product_delivery_terms,
}) => {
  const { t } = useTranslation();
  const { product } = useProduct(match.params.id);
  const [othersBought, setOthersBought] = useState<IProduct[]>([]);
  const [similarTo, setSimilarTo] = useState<IProduct[]>([]);
  useEffect(() => {
    ProductService.getSimilar(match.params.id).then((res) =>
      setSimilarTo(res.data.data)
    );
    ProductService.getOtherBought(match.params.id).then((res) =>
      setOthersBought(res.data.data)
    );
  }, [match.params.id]);

  const [activeItem, setActiveItem] = useState<
    IProductWithItems["items"][number] | null
  >(null);

  const setActiveItemFromId = useCallback(
    (id: number) => {
      if (!product) return;
      const item = product.items.find((i) => i.id === id);
      if (item) setActiveItem(item);
    },
    [product]
  );

  useEffect(() => {
    if (!product) return;
    if (product.items.length) {
      setActiveItem(product.items[0]);
    }
  }, [setActiveItem, product]);

  const [branches, setBranches] = useState<{ full_address: string }[]>([]);

  useEffect(() => {
    if (!product) return;
    ProductService.getBranchesForProduct(product.id)
      .then((res) => {
        if (res.data && Array.isArray(res.data.data)) {
          setBranches(res.data.data.filter((i) => i.full_address));
        }
      })
      .catch((res) => console.error(res));
  }, [product]);

  if (!product || !activeItem) return <LayoutSpinner />;
  return (
    <div className="product">
      <Item
        delivery_terms={product_delivery_terms}
        branches={branches}
        setActiveItemFromId={setActiveItemFromId}
        activeItem={activeItem}
        product={product}
        hot_timer={
          product.preorderable && (
            <ProductHot
              productId={product.id}
              countdown={product.preorderable}
            />
          )
        }
      />
      <div className="prod-content">
        <ProductContent details={product["details"]} brand={product["brand"]} />
        <BundleProduct item_id={activeItem.id} />
        {similarTo.length > 0 && (
          <>
            <ProductSimpleSlider
              title={t("similar_products")}
              products={similarTo}
            />
            <div className="line-sliders d-none d-sm-block" />
          </>
        )}
        {othersBought.length > 0 && (
          <>
            <ProductSimpleSlider
              title={t("what_others_bought")}
              products={othersBought}
            />
            <div className="line-sliders d-none d-sm-block" />
          </>
        )}
        <Reviews product_id={product.id} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ info }: IStoreState) => {
  return {
    product_delivery_terms: info.product_delivery_terms.content,
  };
};

export const ProducShowPage = connect(mapStateToProps)(_ProducShowPage);
