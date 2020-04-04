import React, { useState, useEffect, useContext } from "react";
import { ProfileBasePage } from "../index";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";
import { useTranslation } from "react-i18next";
import { OrderService, IOrder } from "../../../services/order.http";
import classnames from "classnames";
import { useActiveState } from "../../../hooks/common/useActiveState";
import {
  IActiveModalContext,
  ActiveModalContext,
} from "../../../contexts/modalContex";
import { ChooseRateProductModal } from "./choose-rate-product-modal";
import { OrderComplaintModal } from "./order-complaint-modal";

interface OrdersProfilePageProps {}

export const OrdersProfilePage: React.FC<OrdersProfilePageProps> = (props) => {
  const { setActiveModal, activeModal } = useContext<IActiveModalContext>(
    ActiveModalContext
  );
  const [orders, setOrders] = useState<null | IOrder[]>(null);
  const [rateOrder, setRateOrder] = useState<null | IOrder>(null);
  const { t } = useTranslation();
  const { activeState, setActiveState } = useActiveState<"orders" | "history">(
    "orders"
  );

  useEffect(() => {
    OrderService.getAll()
      .then((res) => setOrders(res.data.data as any))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const showRateProductModal = (order: IOrder) => {
    setRateOrder(order);
    setActiveModal("choose-rate-product");
  };
  const showComplaintOrderModal = (order: IOrder) => {
    setRateOrder(order);
    setActiveModal("order-complaint");
  };
  if (!orders) return <ProfileSpinner />;
  return (
    <>
      <ProfileBasePage>
        <div className="checkout-cont">
          <div className="md-btns d-md-none d-flex align-items-center justify-content-center">
            <div
              onClick={() => setActiveState("orders")}
              className={classnames("cursor-pointer order-btn", {
                active: activeState === "orders",
              })}
            >
              {t("orders")}
            </div>
            <span>/</span>
            <div
              onClick={() => setActiveState("history")}
              className={classnames("cursor-pointer history-btn", {
                active: activeState === "history",
              })}
            >
              {t("history")}
            </div>
          </div>
          <div
            className={classnames(
              "profile-right profile-side table-profile orders",
              {
                active: activeState === "orders",
              }
            )}
          >
            <div className="profile-top">
              <h2 className="profile-top_title">{t("orders")}</h2>
            </div>
            <div className="table-responsive order-t">
              <OrderTable>
                {orders
                  .filter((order) => order.delivery_status !== "FINISHED")
                  .map((order) => (
                    <tr key={order.id}>
                      <td className="td1">
                        <div className="order-code">
                          {order.id}
                          <OrderItems items={order.items} />
                        </div>
                      </td>
                      <td className="td2"></td>
                      <td className="progress-td td3">
                        <ProgressBar order={order} />
                      </td>
                      <td className="price-td text-right td4">
                        <div className="price-block">
                          <div className="price sum">
                            {order.paid_amount}
                            <sub>D</sub>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </OrderTable>
            </div>
          </div>
          <div
            className={classnames(
              "profile-right profile-side table-profile buy-cont orders-history",
              {
                active: activeState === "history",
              }
            )}
          >
            <div className="profile-top">
              <h2 className="profile-top_title">{t("order_history")}</h2>
            </div>
            <div className="table-responsive order-t">
              <OrderTable>
                {orders
                  .filter((order) => order.delivery_status === "FINISHED")
                  .map((order) => (
                    <tr key={order.id}>
                      <td className="td1">
                        <div className="order-code">
                          <span className="d-flex d-sm-none">
                            {order.estimated_delivery_date} <div>-</div>
                          </span>
                          {order.id}
                          <OrderItems items={order.items} />
                        </div>
                      </td>
                      <td className="show-xs d-sm-none d-flex flex-column"></td>
                      <td className="td2">
                        <button
                          className="vote"
                          onClick={() => showRateProductModal(order)}
                        >
                          {t("rate")}
                        </button>
                        <button
                          className="complain"
                          onClick={() => showComplaintOrderModal(order)}
                        >
                          {t("appeal")}
                        </button>
                      </td>
                      <td className="progress-td td3">
                        <ProgressBar order={order} />
                      </td>
                      <td className="price-td text-right td4">
                        <div className="price-block">
                          <div className="price sum">
                            {order.paid_amount}
                            <sub>D</sub>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </OrderTable>
            </div>
          </div>
        </div>
      </ProfileBasePage>
      {rateOrder && <ChooseRateProductModal order={rateOrder} />}
      {rateOrder && activeModal === "order-complaint" && (
        <OrderComplaintModal order={rateOrder} />
      )}
    </>
  );
};

const OrderTable: React.FC<{}> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{t("order_number")}</th>
          <th className="text-right" />
          <th className="text-right">{t("status")}</th>
          <th className="text-right">{t("price")}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

const OrderItems: React.FC<{ items: IOrder["items"] }> = ({ items }) => {
  return (
    <div className="order-code_hover d-flex align-items-center flex-column">
      {items.map((item) => (
        <div
          key={item.thumbnail + item.title}
          className="d-flex mt-3"
          style={{ width: "100%" }}
        >
          <div className="image d-flex align-items-center justify-content-center">
            <img src={item.thumbnail} alt="" />
          </div>
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

const ProgressBar: React.FC<{ order: IOrder }> = ({ order }) => {
  const { t } = useTranslation();
  return (
    <div className="progress">
      <div
        className={classnames("progress-bar active")}
        role="progressbar"
        style={{ width: "calc(100% / 3)" }}
        aria-valuenow={15}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {order.delivery_status === "PROCESSING" && (
          <div className="status">{t("processing")}</div>
        )}
      </div>
      <div
        className={classnames("progress-bar", {
          active: order.delivery_status !== "PROCESSING",
        })}
        role="progressbar"
        style={{ width: "calc(100% / 3)" }}
        aria-valuenow={30}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {order.delivery_status === "TAKEN_BY_POST" && (
          <div className="status">{t("taken_by_post")}</div>
        )}
      </div>
      <div
        className={classnames("progress-bar", {
          active: order.delivery_status === "FINISHED",
        })}
        role="progressbar"
        style={{ width: "calc(100% / 3)" }}
        aria-valuenow={20}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {order.delivery_status === "FINISHED" && (
          <div className="status">{t("delivered")}</div>
        )}
        <div className="deliv-date">{order.estimated_delivery_date}</div>
      </div>
    </div>
  );
};
