import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { OrderService } from "../../../services/order.http";
import { ProfileInput } from "../../../components/profile-input";
import { ICustomer, CustomerService } from "../../../services/customer.http";
import { useInput } from "../../../hooks/common/useInput";
import { useLoader } from "../../../hooks/common/useLoader";
import { ICity } from "../../../services/address.http";
import { useHistory } from "react-router-dom";
import { routes } from "../../../routes/routes";

interface CartCheckoutForm {
  totalPrice: number;
  showContent: () => void;
  cities: ICity[];
  customer: Partial<ICustomer>;
}
export const CartCheckoutForm: React.FC<CartCheckoutForm> = ({
  totalPrice,
  showContent,
  cities,
  customer,
}) => {
  const history = useHistory();
  const { t } = useTranslation();
  const { isLoading, startLoading, stopLoading } = useLoader();
  const [trans_id, setTrans_id] = useState<string | number | null>(null);

  const tbcForm = useRef<HTMLFormElement | null>(null);
  const { value: name, onChange: setname } = useInput(customer.name || "");
  const { value: email, onChange: setemail } = useInput(customer.email || "");
  const { value: phone, onChange: setphone } = useInput(customer.phone || "");
  const { value: id_number, onChange: setid_number } = useInput(
    customer.id_number || ""
  );
  const { value: birth_date, onChange: setbirth_date } = useInput(
    customer.birth_date || ""
  );
  const { value: city_id, onChange: setcity_id } = useInput(
    customer.city_id || ""
  );
  const { value: full_address, onChange: setfull_address } = useInput(
    customer.full_address || ""
  );
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const handleSubmit = () => {
    if (isLoading) return;
    startLoading();
    CustomerService.updateCustomerForOrder({
      name,
      email,
      phone,
      id_number,
      birth_date,
      city_id,
      full_address,
    })
      // OrderService.complete()
      .then((res) => {
        setErrors({});
        stopLoading();
        OrderService.payementStart().then((res) => {
          setTrans_id(res.data.trans_id);
        });
      })
      .catch((err) => {
        stopLoading();
        if (err.response && err.response.data && err.response.data.error) {
          setErrors(err.response.data.error);
        } else {
          alert("დაფიქსირდა შეცდომა");
        }
        console.log(err);
      });
  };
  useEffect(() => {
    if (tbcForm && tbcForm.current) {
      tbcForm.current.submit();
      history.push(routes.profile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trans_id]);
  return (
    <div className="profile-right profile-side table-profile buy-cont checkout-buy active">
      <div className="profile-top d-none d-md-block">
        <h2 className="profile-top_title d-none d-sm-block">{t("shedena")}</h2>
      </div>
      <form className="info">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex flex-column info-item">
              <label>{t("city")}</label>
              <select
                value={city_id || ""}
                onChange={setcity_id}
                className="custom-select"
              >
                <option>{t("choose_city")}</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city}
                  </option>
                ))}
              </select>
              {errors && errors.city_id && errors.city_id[0] && (
                <span className="text-danger pl-5">
                  {errors && errors.city_id && errors.city_id[0]}
                </span>
              )}
            </div>

            <ProfileInput
              label={t("name")}
              name={"name"}
              value={name}
              onChange={setname}
              errorMessage={errors && errors.name && errors.name[0]}
            />
            <ProfileInput
              label={t("email")}
              name={"email"}
              value={email}
              onChange={setemail}
              errorMessage={errors && errors.email && errors.email[0]}
            />
            <ProfileInput
              label={t("phone")}
              name={"phone"}
              value={phone}
              onChange={setphone}
              errorMessage={errors && errors.phone && errors.phone[0]}
            />
          </div>
          <div className="col-md-6">
            <ProfileInput
              type="date"
              label={t("birth_date")}
              name={"birth_date"}
              value={birth_date}
              onChange={setbirth_date}
              errorMessage={errors && errors.birth_date && errors.birth_date[0]}
            />
            <ProfileInput
              type="number"
              label={t("id_number")}
              name={"id_number"}
              value={id_number}
              onChange={setid_number}
              errorMessage={errors && errors.id_number && errors.id_number[0]}
            />

            <ProfileInput
              label={t("full_address")}
              name={"full_address"}
              value={full_address}
              onChange={setfull_address}
              errorMessage={
                errors && errors.full_address && errors.full_address[0]
              }
            />
            <div
              style={{ marginTop: "10px" }}
              className="d-flex  justify-content-start invoice"
            >
              <label className="invoice-txt">
                <input type="checkbox" className="hide" />
                <span className="checkmark" />
                {t("send_me_invoice_on_mail")}
              </label>
            </div>
          </div>
        </div>

        {/* <div className="d-flex flex-column info-item">
          <label htmlFor="coupon">კუპონი</label>
          <input type="text" id="coupon" placeholder="JKR459JJ600" />
          <div className="sale">-15%</div>
        </div>
        <div className="d-flex flex-column info-item">
          <label htmlFor="gift">სასაჩუქრე ბარათი</label>
          <input type="text" id="gift" placeholder="XXXXXX" />
        </div> */}
      </form>
      <div className="mobile-shop d-block d-md-none">
        <div className="mobile-shop_item d-flex align-items-center justify-content-between">
          <div className="item1">{t("sum")}</div>
          <div className="item2">{totalPrice} GEL</div>
        </div>
        <div className="mobile-shop_item d-flex align-items-center justify-content-between">
          <div className="item1">{t("delivery")}</div>
          <div className="item2">{t("free")}</div>
        </div>
        <div className="mobile-shop_item d-flex align-items-center justify-content-between">
          <div className="itemLast">{t("gadasaxdeli")}</div>
          <div className="itemLast">{totalPrice} GEL</div>
        </div>
      </div>
      <div className="shopping-bottom d-flex align-items-center justify-content-sm-between justify-content-center">
        <a
          href="#!"
          onClick={showContent}
          className="cont-shop d-none d-sm-block"
        >
          <img src="/assets/images/arrow-xl.svg" alt="arrow" />{" "}
          {t("coniniue_shopping")}
        </a>
        <div className="next d-flex align-items-center">
          {/* <div className="old-price d-none d-sm-block">
            {totalPrice}
            <sub>D</sub>
          </div> */}
          <div className="last-price d-none d-sm-block">
            {totalPrice}
            <sub>D</sub>
          </div>
          <button
            disabled={isLoading}
            onClick={handleSubmit}
            className="buy-btn disableOpacity"
          >
            {t("pay")}

            <img
              src={
                isLoading
                  ? "/assets/images/spinner-svg.svg"
                  : "/assets/images/arrow-right.svg"
              }
              alt="arrow"
            />
            <img
              src={
                isLoading
                  ? "/assets/images/spinner-svg.svg"
                  : "/assets/images/arrow-right_r.svg"
              }
              alt="arrow"
              className="red-arrow"
            />
          </button>
        </div>
      </div>
      {trans_id && (
        <form
          target="_blank"
          ref={tbcForm}
          name="returnform"
          action={`https://ecommerce.ufc.ge/ecomm2/ClientHandler?t=` + trans_id}
          method="POST"
        >
            <input type="hidden" name="trans_id" value={trans_id} /> 
        </form>
      )}
    </div>
  );
};
