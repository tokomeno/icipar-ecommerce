import React, { useState, useEffect } from "react";
import { ProfileBasePage } from "../index";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";
import { useTranslation } from "react-i18next";
import { OrderService, IOrder } from "../../../services/order.http";
import classnames from "classnames";

interface OrdersProfilePageProps {}

export const OrdersProfilePage: React.FC<OrdersProfilePageProps> = props => {
  const [orders, setOrders] = useState<null | IOrder[]>(null);
  const { t } = useTranslation();

  useEffect(() => {
    OrderService.getAll()
      .then(res => setOrders(res.data.data as any))
      .catch(err => {
        console.error(err);
      });
  }, []);

  if (!orders) return <ProfileSpinner />;
  return (
    <ProfileBasePage>
      <div className="checkout-cont">
        <div className="md-btns d-md-none d-flex align-items-center justify-content-center">
          <div className="order-btn active">{t("orders")}</div>
          <span>/</span>
          <div className="history-btn">{t("history")}</div>
        </div>
        <div className="profile-right profile-side table-profile orders active">
          <div className="profile-top">
            <h2 className="profile-top_title">{t("orders")}</h2>
          </div>
          <div className="table-responsive order-t">
            <OrderTable>
              {orders
                .filter(order => order.delivery_status !== "delivered")
                .map(order => (
                  <tr>
                    <td className="td1">
                      <div className="order-code">
                        ID123FGD345
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
        <div className="profile-right profile-side table-profile buy-cont orders-history">
          <div className="profile-top">
            <h2 className="profile-top_title">შეკვეთების ისტორია</h2>
          </div>
          <div className="table-responsive order-t">
            <OrderTable>
              {orders
                .filter(order => order.delivery_status === "delivered")
                .map(order => (
                  <tr>
                    <td className="td1">
                      <div className="order-code">
                        <span className="d-flex d-sm-none">
                          {order.estimated_delivery_date} <div>-</div>
                        </span>
                        ID123FGD345
                        <OrderItems items={order.items} />
                      </div>
                    </td>
                    <td className="show-xs d-sm-none d-flex flex-column">
                      <div className="show-xs_item d-flex align-items-center justify-content-between">
                        <div className="name">Chanel N5, 10ML</div>
                        <div className="price-block">
                          <div className="price sum">
                            110
                            <sub>GEL</sub>
                          </div>
                        </div>
                      </div>
                      <div className="show-xs_item d-flex align-items-center justify-content-between">
                        <div className="name">Tom Ford, Black Star, 30ML</div>
                        <div className="price-block">
                          <div className="price sum">
                            110
                            <sub>GEL</sub>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="td2">
                      <button
                        className="vote"
                        data-toggle="modal"
                        data-target="#choose"
                      >
                        შეფასება
                      </button>
                      <button
                        className="complain"
                        data-toggle="modal"
                        data-target="#complaint"
                      >
                        გასაჩივრება
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
      {items.map(item => (
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
        className={classnames("progress-bar", {
          active: order.delivery_status === "processing"
        })}
        role="progressbar"
        style={{ width: "calc(100% / 3)" }}
        aria-valuenow={15}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="status">{t("processing")}</div>
      </div>
      <div
        className={classnames("progress-bar", {
          active: order.delivery_status === "taken_by_post"
        })}
        role="progressbar"
        style={{ width: "calc(100% / 3)" }}
        aria-valuenow={30}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="status">{t("taken_by_post")}</div>
      </div>
      <div
        className={classnames("progress-bar", {
          active: order.delivery_status === "delivered"
        })}
        role="progressbar"
        style={{ width: "calc(100% / 3)" }}
        aria-valuenow={20}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="status">{t("delivered")}</div>
        <div className="deliv-date">{order.estimated_delivery_date}</div>
      </div>
    </div>
  );
};
