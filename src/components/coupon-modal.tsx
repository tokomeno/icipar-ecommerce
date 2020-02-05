import React from "react";

export const CouponModal = (
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
