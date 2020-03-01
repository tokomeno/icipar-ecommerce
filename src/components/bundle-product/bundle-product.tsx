import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductService, IProductBundle } from "../../services/product.http";
import { diffInPercentage } from "../../utils";
import { connect } from "react-redux";
import { setBundleQntyToCart } from "../../redux/cart/cartActions";
import { useLoader } from "../../hooks/common/useLoader";

interface BundleProductProps {
  item_id: number;
  toogleBundleToCart: typeof setBundleQntyToCart;
}

const _BundleProduct: React.FC<BundleProductProps> = ({
  item_id,
  toogleBundleToCart
}) => {
  const { t } = useTranslation();
  const { isLoading, startLoading, stopLoading } = useLoader();
  const [bundle, setBundle] = useState<IProductBundle | null>(null);
  useEffect(() => {
    ProductService.getBundleForItem(item_id)
      .then(res => setBundle(res.data.data))
      .catch(err => {});
  }, [item_id]);

  if (!bundle) return null;
  const oldTotalSum = bundle.items.reduce<number>((acc, b) => acc + b.price, 0);
  return (
    <div className="bundle-prod">
      <h3 className="title text-center">{t("ertad_iafi")}</h3>
      <div className="bundle-prod_cont d-flex align-items-center justify-content-md-center justify-content-start">
        {bundle.items.map(item => (
          <>
            <div className="bundle-item d-flex flex-column align-items-center">
              <div className="image d-flex align-items-center justify-content-center">
                <img src={item.thumbnail} alt="bundle" />
              </div>
              <div className="name">{item.title}</div>
              <div className="bundle-price d-flex">
                {/* <div className="price old">
                  {item.price}
                  <sub>D</sub>
                </div> */}
                <div className="price">
                  {item.price}
                  <sub>D</sub>
                </div>
              </div>
            </div>
            <div className="plus">
              <img src="/assets/images/plus.png" alt="" />
            </div>
          </>
        ))}
        <div className="equal-block">
          <div className="sum">
            {bundle.price}
            <sub>D</sub>
          </div>
          <div className="sale-block d-flex">
            <div className="sale">
              -{Math.ceil(diffInPercentage(bundle.price, oldTotalSum))}%
            </div>
            <div className="old-sum">
              {oldTotalSum}
              <sub>D</sub>
            </div>
          </div>
          <button
            disabled={isLoading}
            onClick={e => {
              e.preventDefault();
              startLoading();
              toogleBundleToCart(
                bundle.id || 1,
                { action: "encrease" },
                stopLoading
              ); // TODO: bundle_id
            }}
            className="bag-btn d-flex disableOpacity"
          >
            {t("cart")}
            <img src="/assets/images/arrow-right.svg" alt="arrow" />
            <img
              src="/assets/images/arrow-right_red.svg"
              alt="arrow"
              className="red"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export const BundleProduct = connect(null, {
  toogleBundleToCart: setBundleQntyToCart
})(_BundleProduct);
