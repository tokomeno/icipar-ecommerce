import React, { useState, useEffect } from "react";
import { ProfileBasePage } from "../index";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";
import { useTranslation } from "react-i18next";
import { OrderService } from "../../../services/order.http";

interface OrdersProfilePageProps {}

export const OrdersProfilePage: React.FC<OrdersProfilePageProps> = props => {
  const [orders, setOrders] = useState<null | []>(null);
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
            <table className="table">
              <thead>
                <tr>
                  <th>{t("order_number")}</th>
                  <th className="text-right" />
                  <th className="text-right">{t("status")}</th>
                  <th className="text-right">{t("price")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td1">
                    <div className="order-code">
                      ID123FGD345
                      <div className="order-code_hover d-flex align-items-center">
                        <div className="image d-flex align-items-center justify-content-center">
                          <img
                            src="/assets/uploads/images/cart-product@2x.png"
                            alt=""
                          />
                        </div>
                        <div className="title">
                          Calvin Klein All, 100ml, Red
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="td2"></td>
                  <td className="progress-td td3">
                    <div className="progress">
                      <div
                        className="progress-bar active"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">მუშავდება</div>
                      </div>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">გზაშია</div>
                      </div>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">მიწოდებულია</div>
                        <div className="deliv-date">23 სექტემბერი, 2019</div>
                      </div>
                    </div>
                  </td>
                  <td className="price-td text-right td4">
                    <div className="price-block">
                      <div className="price sum">
                        110
                        <sub>D</sub>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td1">
                    <div className="order-code">
                      ID123FGD345
                      <div className="order-code_hover d-flex align-items-center">
                        <div className="image d-flex align-items-center justify-content-center">
                          <img
                            src="/assets/uploads/images/cart-product@2x.png"
                            alt=""
                          />
                        </div>
                        <div className="title">
                          Calvin Klein All, 100ml, Red
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="td2"></td>
                  <td className="progress-td td3">
                    <div className="progress">
                      <div
                        className="progress-bar active completed"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">მუშავდება</div>
                      </div>
                      <div
                        className="progress-bar active"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">გზაშია</div>
                      </div>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">მიწოდებულია</div>
                      </div>
                    </div>
                  </td>
                  <td className="price-td text-right td4">
                    <div className="price-block">
                      <div className="price sum">
                        110
                        <sub>D</sub>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td1">
                    <div className="order-code">
                      ID123FGD345
                      <div className="order-code_hover d-flex align-items-center">
                        <div className="image d-flex align-items-center justify-content-center">
                          <img
                            src="/assets/uploads/images/cart-product@2x.png"
                            alt=""
                          />
                        </div>
                        <div className="title">
                          Calvin Klein All, 100ml, Red
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="td2"></td>
                  <td className="progress-td td3">
                    <div className="progress">
                      <div
                        className="progress-bar active completed"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">მუშავდება</div>
                      </div>
                      <div
                        className="progress-bar active completed"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">გზაშია</div>
                      </div>
                      <div
                        className="progress-bar active"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">მიწოდებულია</div>
                      </div>
                    </div>
                  </td>
                  <td className="price-td text-right td4">
                    <div className="price-block">
                      <div className="price sum">
                        110
                        <sub>D</sub>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="profile-right profile-side table-profile buy-cont orders-history">
          <div className="profile-top">
            <h2 className="profile-top_title">შეკვეთების ისტორია</h2>
          </div>
          <div className="table-responsive order-t">
            <table className="table">
              <thead>
                <tr>
                  <th>შეკვეთის ნომერი</th>
                  <th className="text-right" />
                  <th className="text-right">სტატუსი</th>
                  <th className="text-right">ფასი</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td1">
                    <div className="order-code">
                      {" "}
                      <span className="d-flex d-sm-none">
                        23.09.19 <div>-</div>
                      </span>
                      ID123FGD345
                      <div className="order-code_hover d-flex align-items-center">
                        <div className="image d-flex align-items-center justify-content-center">
                          <img
                            src="/assets/uploads/images/cart-product@2x.png"
                            alt=""
                          />
                        </div>
                        <div className="title">
                          Calvin Klein All, 100ml, Red
                        </div>
                      </div>
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
                    <div className="progress">
                      <div
                        className="progress-bar active completed"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">მუშავდება</div>
                      </div>
                      <div
                        className="progress-bar active completed"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">გზაშია</div>
                      </div>
                      <div
                        className="progress-bar active"
                        role="progressbar"
                        style={{ width: "calc(100% / 3)" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="status">მიწოდებულია</div>
                      </div>
                    </div>
                  </td>
                  <td className="price-td text-right td4">
                    <div className="price-block">
                      <div className="price sum">
                        110
                        <sub>D</sub>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProfileBasePage>
  );
};
