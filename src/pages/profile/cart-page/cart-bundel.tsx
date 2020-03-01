import React from "react";

import { useTranslation } from "react-i18next";
import { ICartBundle } from "../../../redux/cart/cartTypes";
import classnames from "classnames";
import { setBundleQntyToCart } from "../../../redux/cart/cartActions";
import { useLoader } from "../../../hooks/common/useLoader";

export type CartBundelProps = {
  bundle: ICartBundle;
  setBundleQntyToCart: typeof setBundleQntyToCart;
};
export const CartBundel: React.FC<CartBundelProps> = ({
  bundle,
  setBundleQntyToCart
}) => {
  const { t } = useTranslation();
  const { isLoading, startLoading, stopLoading } = useLoader();

  return (
    <tr>
      <td className="first-td">
        <a href="#!" className="d-flex align-items-center">
          <div className="image d-flex align-items-center justify-content-center">
            {bundle.thumbnail && <img src={bundle.thumbnail} alt="cart" />}
          </div>
          <div>
            <div className="name">{bundle.title}</div>
            <div className="profbtns d-flex">
              <button
                onClick={() =>
                  setBundleQntyToCart(bundle.bundle_id || 1, {
                    action: "setNewQnty",
                    qnty: 0
                  })
                }
                className="profbtns_btn"
              >
                {t("delete")}
              </button>
              <button className="profbtns_btn d-none d-md-block">
                {t("mogvianebit_sheviden")}
              </button>
              <button className="heart profbtns_btn">
                <img src="/assets/images/heart-border.svg" alt="favorite" />
                <img
                  src="/assets/images/loved.svg"
                  alt="favorite"
                  className="added"
                />
              </button>
            </div>
          </div>
        </a>
      </td>
      <td>
        <div className="quantity d-flex flex-column align-items-center">
          <span
            className={classnames("plus", {
              "opacity-03": isLoading
            })}
            onClick={() => {
              if (isLoading) return;
              setBundleQntyToCart(
                bundle.bundle_id || 1,
                { action: "encrease" },
                stopLoading
              );
              startLoading();
            }}
          >
            <i className="fas fa-chevron-up" />
          </span>
          <span className="qty">
            <input type="number" readOnly value={bundle.bundles_count} />
          </span>
          <span
            className={classnames("min", {
              "opacity-03": isLoading
            })}
            onClick={() => {
              if (isLoading) return;
              setBundleQntyToCart(
                bundle.bundle_id || 1,
                { action: "decrease" },
                stopLoading
              );
              startLoading();
            }}
          >
            <i className="fas fa-chevron-down" />
          </span>
        </div>
      </td>
      <td className="price-td hidden-price">
        <div className="price-block">
          <div className="price text-right">
            {bundle.amount_payable}
            <sub>D</sub>
          </div>
        </div>
      </td>
      <td className="price-td hidden-price">
        <div className="price-block">
          <div className="price text-right">
            {bundle.bundle_price}
            <sub>D</sub>
          </div>
        </div>
      </td>
      <td className="price-td text-right">
        <div className="price-block">
          <div className="price sum">
            {bundle.amount_payable * bundle.bundles_count}
            <sub>D</sub>
          </div>
        </div>
      </td>
    </tr>
  );
};
