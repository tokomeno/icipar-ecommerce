import React from "react";
import { Layout } from "../../layout";

interface ProfileLeftProps {}

export const ProfileLeft: React.FC<ProfileLeftProps> = ({}) => {
  return (
    <div className="profile-left profile-side d-lg-block d-none">
      <div className="username text-center d-lg-none d-block">
        გამარჯობა <span>ქრისტინე</span>
      </div>
      <div className="user-image">
        <img src="/assets/uploads/images/user.png" alt="user" />
      </div>
      <a href="#!" className="mypage-link active d-flex">
        <div className="image-b d-flex align-items-center justify-content-center">
          <img src="/assets/images/user-g.svg" alt="user" />
          <img
            src="/assets/images/user-red.svg"
            alt="user"
            className="active"
          />
        </div>
        <div className="title">ჩემი გვერდი</div>
      </a>
      <div className="profile-menu">
        <a href="#!" className="mypage-link d-flex">
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/bag-g.svg" alt="cart" />
            <img src="/assets/images/bag-r.svg" alt="cart" className="active" />
            <div className="ntfc" />
          </div>
          <div className="title">კალათა</div>
        </a>
        <a href="#!" className="mypage-link d-flex">
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/order-g.svg" alt="cart" />
            <img
              src="/assets/images/order-r.svg"
              alt="cart"
              className="active"
            />
          </div>
          <div className="title">შეკვეთები</div>
        </a>
        <a href="#!" className="mypage-link d-flex">
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/heart-g.svg" alt="cart" />
            <img
              src="/assets/images/heart-r.svg"
              alt="cart"
              className="active"
            />
            <div className="ntfc" />
          </div>
          <div className="title">სურვილები</div>
        </a>
        <a href="#!" className="mypage-link d-flex">
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/price-g.svg" alt="cart" />
            <img
              src="/assets/images/price-r.svg"
              alt="cart"
              className="active"
            />
          </div>
          <div className="title">კუპონები</div>
        </a>
        <a href="#!" className="mypage-link d-flex">
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/card-g.svg" alt="cart" />
            <img
              src="/assets/images/card-4.svg"
              alt="cart"
              className="active"
            />
          </div>
          <div className="title">ბარათები</div>
        </a>
      </div>
      <div className="profile-menu">
        <a href="#!" className="mypage-link d-flex">
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/i-g.svg" alt="info" />
            <img src="/assets/images/i-r.svg" alt="info" className="active" />
          </div>
          <div className="title">ინფორმაცია</div>
        </a>
        <a href="#!" className="mypage-link d-flex">
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/loc-g.svg" alt="locations" />
            <img
              src="/assets/images/loc-r.svg"
              alt="locations"
              className="active"
            />
          </div>
          <div className="title">მისამართები</div>
        </a>
      </div>
      <div className="profile-menu">
        <a href="#!" className="mypage-link logout d-flex">
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/logout.svg" alt="info" />
          </div>
          <div className="title">გამოსვლა</div>
        </a>
      </div>
    </div>
  );
};
