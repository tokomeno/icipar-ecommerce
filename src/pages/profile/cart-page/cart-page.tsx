import React from "react";
import { ProfileBasePage } from "../index";
import { IProduct, ICartItem } from "../../../data/product";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { IStoreState } from "../../../redux/mainReducer";
import { changeQnty } from "../../../redux/cart/cartActions";
import { useToggle } from "../../../hooks/common/useToggle";
import { useCounter } from "../../../hooks/common/useCounter";

interface CartPageProps {
  cartItems: ICartItem[];
  changeQntyById: typeof changeQnty;
}

const _CartPage: React.FC<CartPageProps> = ({ cartItems, changeQntyById }) => {
  const { t } = useTranslation();

  return (
    <ProfileBasePage>
      <div className="checkout-cont">
        <div className="checkout-top d-md-none d-flex align-items-center justify-content-center">
          <div className="top_cart show active">{t("my_cart")}</div>
          <span>/</span>
          <div className="top_buy">{t("shedena")}</div>
        </div>
        <div className="profile-right profile-side table-profile checkout-first">
          <div className="profile-top d-none d-md-block">
            <h1 className="profile-top_title">{t("my_cart")}</h1>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>{t("products")}</th>
                  <th className="text-right">{t("quantity")}</th>
                  <th className="text-right">{t("price")}</th>
                  <th className="text-right">{t("sum")}</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(cartItem => (
                  <CartItem
                    changeQntyById={changeQntyById}
                    key={cartItem.item_id}
                    cartItem={cartItem}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="mobile-shop d-block d-md-none">
            <div className="mobile-shop_item d-flex align-items-center justify-content-between">
              <div className="item1">ჯამი</div>
              <div className="item2">200GEL</div>
            </div>
            <div className="mobile-shop_item d-flex align-items-center justify-content-between">
              <div className="item1">მიტანა</div>
              <div className="item2">უფასო</div>
            </div>
            <div className="mobile-shop_item d-flex align-items-center justify-content-between">
              <div className="itemLast">გადასახდელი</div>
              <div className="itemLast">200GEL</div>
            </div>
          </div>
          <div className="shopping-bottom d-flex flex-column flex-md-row align-items-center justify-content-sm-between justify-content-center">
            <form className="copy-code d-flex align-items-center">
              <input
                type="text"
                placeholder="ჩააკოპირე კუპონის ან ფასდაკლების კოდი…"
              />
              <span>-15%</span>
            </form>
            <div className="next d-flex align-items-center">
              <div className="last-price d-none d-sm-block">
                110
                <sub>D</sub>
              </div>
              <a href="#!" className="buy-btn">
                შეძენა
                <img src="/assets/images/arrow-right.svg" alt="arrow" />
                <img
                  src="/assets/images/arrow-right_r.svg"
                  alt="arrow"
                  className="red-arrow"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-right profile-side table-profile buy-cont checkout-buy">
          <div className="profile-top d-none d-md-block">
            <h2 className="profile-top_title d-none d-sm-block">
              {t("shedena")}
            </h2>
          </div>
          <form className="info">
            <div className="dropdown info-item">
              <label>მისამართი</label>
              <select className="selectpicker">
                <option>თბილისი, სულხან ცინცაძის 3</option>
                <option>თბილისი, სულხან ცინცაძის 1</option>
                <option>თბილისი, სულხან ცინცაძის 2</option>
              </select>
            </div>
            <div className="d-flex flex-column info-item">
              <label htmlFor="coupon">კუპონი</label>
              <input type="text" id="coupon" placeholder="JKR459JJ600" />
              <div className="sale">-15%</div>
            </div>
            <div className="d-flex flex-column info-item">
              <label htmlFor="gift">სასაჩუქრე ბარათი</label>
              <input type="text" id="gift" placeholder="XXXXXX" />
            </div>
            <div className="d-flex justify-content-xl-end justify-content-start invoice">
              <label className="invoice-txt">
                <input type="checkbox" className="hide" />
                <span className="checkmark" />
                გამომიგზავნე ინვოისი მეილზე
              </label>
            </div>
          </form>
          <div className="mobile-shop d-block d-md-none">
            <div className="mobile-shop_item d-flex align-items-center justify-content-between">
              <div className="item1">ჯამი</div>
              <div className="item2">200GEL</div>
            </div>
            <div className="mobile-shop_item d-flex align-items-center justify-content-between">
              <div className="item1">მიტანა</div>
              <div className="item2">უფასო</div>
            </div>
            <div className="mobile-shop_item d-flex align-items-center justify-content-between">
              <div className="itemLast">გადასახდელი</div>
              <div className="itemLast">200GEL</div>
            </div>
          </div>
          <div className="shopping-bottom d-flex align-items-center justify-content-sm-between justify-content-center">
            <a href="#!" className="cont-shop d-none d-sm-block">
              <img src="/assets/images/arrow-xl.svg" alt="arrow" /> შოპინგის
              გაგრძელება
            </a>
            <div className="next d-flex align-items-center">
              <div className="old-price d-none d-sm-block">
                110
                <sub>D</sub>
              </div>
              <div className="last-price d-none d-sm-block">
                110
                <sub>D</sub>
              </div>
              <a href="#!" className="buy-btn">
                შეძენა
                <img src="/assets/images/arrow-right.svg" alt="arrow" />
                <img
                  src="/assets/images/arrow-right_r.svg"
                  alt="arrow"
                  className="red-arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProfileBasePage>
  );
};
const mapStateToProps = ({ cart }: IStoreState) => {
  return { cartItems: cart.items };
};

export const CartPage = connect(mapStateToProps, {
  changeQntyById: changeQnty
})(_CartPage);

export type CartItemProps = {
  cartItem: ICartItem;
  changeQntyById: typeof changeQnty;
};
export const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { t } = useTranslation();
  const { counter, increase, decrease } = useCounter(cartItem.items_count, 1);

  return (
    <tr>
      <td className="first-td">
        <a href="#!" className="d-flex align-items-center">
          <div className="image d-flex align-items-center justify-content-center">
            <img src="/assets/uploads/images/cart-product@2x.png" alt="cart" />
          </div>
          <div>
            <div className="name">{cartItem.title}</div>
            <div className="profbtns d-flex">
              <button className="profbtns_btn">{t("delete")}</button>
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
          <span className="plus">
            <i className="fas fa-chevron-up" />
          </span>
          <span className="qty">
            <input type="number" min={1} defaultValue={1} />
          </span>
          <span className="min">
            <i className="fas fa-chevron-down" />
          </span>
        </div>
      </td>
      <td className="price-td hidden-price">
        <div className="price-block">
          <div className="price text-right">
            {cartItem.price}
            <sub>D</sub>
          </div>
        </div>
      </td>
      {/* <td className="price-td text-right">
        <div className="price-block">
          <div className="price sum">
            110
            <sub>D</sub>
          </div>
        </div>
      </td> */}
    </tr>
  );
};

export const Modal = (
  <div className="checkout-saleBAnner d-none d-lg-block">
    <button className="close-sale d-flex align-items-center justify-content-center">
      <i className="fas fa-times" />
    </button>
    <img src="/assets/images/sale-banner.png" alt="" />
    <div className="bg text-center">
      <div className="title">მიიღე 10%-იანი ფასდაკლება</div>
      <div className="txt">შეავსე შენი პროფილი სრულად</div>
      <a href="#!" className="link">
        კარგი
      </a>
    </div>
  </div>
);
