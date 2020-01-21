import React, { ReactElement } from "react";
import { productCategories } from "../../data/categories";
import { Link } from "react-router-dom";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <React.Fragment>
      <div className="bg__site"></div>
      <header className="site__header">
        <div className="header d-flex flex-md-column flex-column-reverse">
          <div className="header-sale text-center">
            <p className="header-sale_txt d-none d-md-block">
              გამოიწერეთ სიახლეები და მიიღეთ 15%-იანი ფასდაკლება
            </p>
            <p className="header-sale_txt d-block d-md-none">
              40%-იანი ფასდაკლება მხოლოდ შენთვის
            </p>
          </div>
          <div className="sup-hdr d-none d-md-block">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-9 col-md-8">
                  <ul className="d-none d-lg-flex">
                    <li>
                      <a href="tel:+995322201717" className="sup-hdr_link">
                        <img src="/assets/images/phone.svg" alt="call" />
                        +995322201717
                      </a>
                    </li>
                    <li className="store">
                      <a href="#!" className="sup-hdr_link">
                        <img src="/assets/images/marker.svg" alt="map marker" />
                        მაღაზიები
                      </a>
                    </li>
                    <li>
                      <Link to="/about-us" className="sup-hdr_link">
                        ჩვენს შესახებ
                      </Link>
                    </li>
                    <li>
                      <a href="#!" className="sup-hdr_link">
                        კონტაქტი
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="sup-hdr_link">
                        როგორ მუშაობს?
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="sup-hdr_link">
                        FAQ
                      </a>
                    </li>
                  </ul>
                  <div className="burger-btn d-lg-none d-block">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 text-right">
                  <a
                    href="#!"
                    className="sup-hdr_link"
                    data-target=".login"
                    data-toggle="modal"
                  >
                    <img src="/assets/images/user.svg" alt="user" />
                    რეგისტრაცია/შესვლა
                  </a>
                  <a href="#!" className="lang">
                    <img src="/assets/images/en.svg" alt="english" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-hdr d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <a href="index.html" className="logo col-md-3">
                  <img src="/assets/images/logo.svg" alt="logo" />
                </a>
                <div className="col-md-7">
                  <form className="search d-flex justify-content-between">
                    <div className="search-dropdown dropdown d-flex">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="categories"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="/assets/images/squares.svg"
                          alt="squares icon"
                        />
                        <span>კატეგორიები</span>
                        <i className="fas fa-angle-down" />
                        <i className="fas fa-angle-up" />
                      </button>
                      <div
                        className="dropdown-menu search-menu"
                        aria-labelledby="categories"
                      >
                        <a className="dropdown-item" href="#">
                          სუნამოები
                        </a>
                        <a className="dropdown-item" href="#">
                          კანის მოვლა
                        </a>
                        <a className="dropdown-item" href="#">
                          თმის მოვლა
                        </a>
                        <a className="dropdown-item" href="#">
                          მაკიაჟი
                        </a>
                        <a className="dropdown-item" href="#">
                          ფრჩხილის მოვლა
                        </a>
                        <a className="dropdown-item" href="#">
                          პარაფარმაცია
                        </a>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="search-input"
                      placeholder="შეიყვანეთ საძიებო სიტყვა…"
                    />
                    <button type="submit" className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                  <div className="hdr-cart">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="cart1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="/assets/images/bag.svg" alt="cart" />
                        <div className="d-none d-lg-block">
                          <div className="price">
                            110
                            <sub>D</sub>
                          </div>
                          <div className="title">კალათა</div>
                        </div>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="cart1">
                        <div className="d-flex align-items-center item">
                          <div className="image d-flex align-items-center justify-content-center">
                            <img
                              src="/assets/uploads/images/cart-product.png"
                              alt=""
                            />
                          </div>
                          <div className="desc">
                            <div className="item-title">
                              Calvin Klein All, 100ml, Red
                            </div>
                            <div className="price">
                              110
                              <sub>D</sub>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center item">
                          <div className="image d-flex align-items-center justify-content-center">
                            <img
                              src="/assets/uploads/images/cart-product.png"
                              alt=""
                            />
                          </div>
                          <div className="desc">
                            <div className="item-title">
                              Calvin Klein All, 100ml, Red
                            </div>
                            <div className="price">
                              110
                              <sub>D</sub>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#!"
                          target="_blank"
                          className="d-flex justify-content-between cart-btn"
                        >
                          კალათა
                          <img
                            src="/assets/images/arrow-right.svg"
                            alt="right arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="hdr-cart hdr-fav">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="cart"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="/assets/images/heart.svg" alt="favorite" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="cart"
                      >
                        <div className="d-flex align-items-center item">
                          <div className="image d-flex align-items-center justify-content-center">
                            <img
                              src="/assets/uploads/images/cart-product.png"
                              alt=""
                            />
                          </div>
                          <div className="desc">
                            <div className="item-title">
                              Calvin Klein All, 100ml, Red
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center item">
                          <div className="image d-flex align-items-center justify-content-center">
                            <img
                              src="/assets/uploads/images/cart-product.png"
                              alt=""
                            />
                          </div>
                          <div className="desc">
                            <div className="item-title">
                              Calvin Klein All, 100ml, Red
                            </div>
                          </div>
                        </div>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="d-flex justify-content-between cart-btn"
                        >
                          სურვილები
                          <img
                            src="/assets/images/arrow-right.svg"
                            alt="right arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-none d-lg-block">
            <div className="header-menu d-flex justify-content-between">
              {productCategories.map(item => (
                <HeaderMenuItem key={item.id} title={item.title} />
              ))}
            </div>
          </div>
          <div className="container d-block d-md-none">
            <div className="xs-header d-flex align-items-center justify-content-around">
              <div className="d-flex align-items-center">
                <div className="burger-btn d-lg-none d-block">
                  <span />
                  <span />
                  <span />
                </div>
                <a href="index.html" className="logo-xs">
                  <img src="/assets/images/logo.svg" alt="logo" />
                </a>
              </div>
              <div className="d-flex">
                <div className="xs-hdr_btn btn-search">
                  <i className="fas fa-search" />
                </div>
                <div className="xs-hdr_btn btn-cart active">
                  <div className="ball" />
                  <img src="/assets/images/bag-dark.svg" alt="cart" />
                </div>
                <div
                  className="xs-hdr_btn btn-user"
                  data-target=".login"
                  data-toggle="modal"
                >
                  <img src="/assets/images/user.svg" alt="user" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

type HeaderMenuItemProps = {
  title: string;
};
const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ title }) => {
  return (
    <div className="header-menu_item">
      <a href="#!" className="link">
        {title}
      </a>
      <div className="inner-menu">
        <div className="container">
          <div className="d-flex">
            <div className="inner-menu_block categories">
              <div className="title">კატეგორიები</div>
              <div className="items">
                <a href="#!" className="items-link">
                  მამაკაცი
                </a>
                <a href="#!" className="items-link">
                  ქალი
                </a>
                <a href="#!" className="items-link">
                  სიახლე
                </a>
              </div>
            </div>
            <div className="inner-menu_block categories">
              <div className="title">ბრენდები</div>
              <div className="items">
                <div className="letter">A</div>
                <a href="#!" className="letter-link">
                  Aguilera
                </a>
                <a href="#!" className="letter-link">
                  Armani
                </a>
                <a href="#!" className="letter-link">
                  Antonio Banderas
                </a>
                <a href="#!" className="letter-link">
                  Arno Sorel
                </a>
                <a href="#!" className="letter-link">
                  Avene
                </a>
                <div className="letter">B</div>
                <a href="#!" className="letter-link">
                  Barbara Gould
                </a>
                <a href="#!" className="letter-link">
                  Beneton
                </a>
                <a href="#!" className="letter-link">
                  Bruno Banani
                </a>
                <a href="#!" className="letter-link">
                  Burberry
                </a>
                <a href="#!" className="letter-link">
                  Bvlgari
                </a>
                <div className="letter">C</div>
                <a href="#!" className="letter-link">
                  Chanel
                </a>
                <a href="#!" className="letter-link">
                  Calvin Klein
                </a>
                <a href="#!" className="letter-link">
                  Chanel
                </a>
                <a href="#!" className="letter-link">
                  Calvin Klein
                </a>
                <div className="letter">A</div>
                <a href="#!" className="letter-link">
                  Aguilera
                </a>
                <a href="#!" className="letter-link">
                  Armani
                </a>
                <a href="#!" className="letter-link">
                  Antonio Banderas
                </a>
                <a href="#!" className="letter-link">
                  Arno Sorel
                </a>
                <a href="#!" className="letter-link">
                  Avene
                </a>
              </div>
            </div>
            <div className="suggestion left">
              <div className="title">დღის შეთავაზება</div>
              <a href="#!" className="d-flex align-items-center flex-column">
                <div className="image">
                  <img
                    src="/assets/uploads/images/suggestion1.png"
                    alt="suggestion"
                  />
                </div>
                <div className="prod-name">Calvin Klein All, 100ml</div>
                <div className="price d-flex">
                  <div className="old-price">
                    <span>110</span>
                    <sub>D</sub>
                  </div>
                  <div className="new-price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
              </a>
            </div>
            <div className="suggestion">
              <div className="title">ბლოგ ბოსტი</div>
              <a href="#!" className="d-flex align-items-center flex-column">
                <div className="image">
                  <img
                    src="/assets/uploads/images/suggestion2.png"
                    alt="suggestion"
                  />
                </div>
                <div className="prod-name">სუნამოს შერჩევის ხელოვნება</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
