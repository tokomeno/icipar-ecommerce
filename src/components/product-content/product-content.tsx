import React from "react";

interface ProductContentProps {}

export const ProductContent: React.FC<ProductContentProps> = props => {
  return (
    <div className="prod-content">
      <div className="container">
        <div className="nav nav-tabs prod-menu d-flex justify-content-lg-center justify-content-start">
          <a
            className="prod-menu_link nav-link active"
            data-toggle="tab"
            href="#home"
          >
            პროდუქტის აღწერა
          </a>
          <a
            className="prod-menu_link nav-link"
            data-toggle="tab"
            href="#profile"
          >
            შემადგენლობა
          </a>
          <a
            className="prod-menu_link nav-link"
            data-toggle="tab"
            href="#mesame"
          >
            გამოყენების წესი
          </a>
          <a
            className="prod-menu_link nav-link"
            data-toggle="tab"
            href="#meotxe"
          >
            ბრენდის შესახებ
          </a>
        </div>
        <div className="menu_desc tab-content">
          <div className="txt-block tab-pane fade show active" id="home">
            <div className="d-flex flex-column align-items-center">
              <p className="txt text-center">
                ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად აფასებენ
                ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების სურნელებათა
                თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო განკუთვნილია
                როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
              </p>
              <button className="see-more">გაიგე მეტი</button>
              <div className="more-block d-flex flex-column align-items-center">
                <img
                  src="uploads/images/more1.png"
                  alt="photo"
                  className="main-photo"
                />
                <h2 className="title">პროდუქტის სრული სახელწოდება</h2>
                <p className="txt text-center">
                  ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                  ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად
                  აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების
                  სურნელებათა თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო
                  განკუთვნილია როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
                </p>
                <div className="more-content">
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="image">
                        <img src="uploads/images/more2.png" alt="eiffel" />
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="desc d-flex flex-column justify-content-center">
                        <h2 className="desc_title">როგორ დაიწყო?</h2>
                        <p className="txt">
                          ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი
                          და ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს
                          თანაბრად აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო
                          აგრძელებს ბაღების სურნელებათა თემას, რომელიც 2003
                          წლიდან იღებს სათავეს… სუნამო განკუთვნილია როგორც
                          ქალბატონებისთვის, ასევე მამაკაცებისთვის.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row flex-sm-row flex-column-reverse">
                    <div className="col-sm-7">
                      <div className="desc d-flex flex-column align-items-sm-end align-items-center justify-content-center">
                        <h2 className="desc_title text-right">სად შეიქმნა</h2>
                        <p className="txt text-right">
                          ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი
                          და ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს
                          თანაბრად აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო
                          აგრძელებს ბაღების სურნელებათა თემას, რომელიც 2003
                          წლიდან იღებს სათავეს… სუნამო განკუთვნილია როგორც
                          ქალბატონებისთვის, ასევე მამაკაცებისთვის.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="image">
                        <img src="uploads/images/more3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="close-btn">დახურვა</button>
              </div>
            </div>
          </div>
          <div className="txt-block tab-pane fade" id="profile">
            <div className="d-flex flex-column align-items-center">
              <p className="txt text-center">
                ეს არის სინათლისა და სიცოცხლის სურნელი
              </p>
            </div>
          </div>
          <div className="txt-block tab-pane fade" id="mesame">
            <div className="d-flex flex-column align-items-center">
              <p className="txt text-center">
                ეს არის სინათლისა და სიცოცხლის სურნელი ეს არის სინათლისა და
                სიცოცხლის სურნელი ეს არის სინათლისა და სიცოცხლის სურნელი ეს არის
                სინათლისა და სიცოცხლის სურნელი ეს არის სინათლისა და სიცოცხლის
                სურნელი ეს არის სინათლისა და სიცოცხლის სურნელი
              </p>
            </div>
          </div>
          <div className="txt-block tab-pane fade" id="meotxe">
            <div className="d-flex flex-column align-items-center">
              <p className="txt text-center">
                ეს არის სინათლისა და სიცოცხლის სურნელი ეს არის სინათლისა და
                სიცოცხლის სურნელი
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bundle-prod">
        <h3 className="title text-center">ერთად იაფია</h3>
        <div className="bundle-prod_cont d-flex align-items-center justify-content-md-center justify-content-start">
          <div className="bundle-item d-flex flex-column align-items-center">
            <div className="image d-flex align-items-center justify-content-center">
              <img src="uploads/images/bundle1.png" alt="bundle" />
            </div>
            <div className="name">Calvin Klein All, 100ml</div>
            <div className="bundle-price d-flex">
              <div className="price old">
                110
                <sub>D</sub>
              </div>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
          </div>
          <div className="plus">
            <img src="images/plus.png" alt="" />
          </div>
          <div className="bundle-item d-flex flex-column align-items-center">
            <div className="image d-flex align-items-center justify-content-center">
              <img src="uploads/images/bundle2.png" alt="bundle" />
            </div>
            <div className="name">Calvin Klein All, 100ml</div>
            <div className="bundle-price d-flex">
              <div className="price old">
                110
                <sub>D</sub>
              </div>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
          </div>
          <div className="plus">
            <img src="images/plus.png" alt="" />
          </div>
          <div className="bundle-item d-flex flex-column align-items-center">
            <div className="image d-flex align-items-center justify-content-center">
              <img src="uploads/images/bundle3.png" alt="bundle" />
            </div>
            <div className="name">Calvin</div>
            <div className="bundle-price d-flex">
              <div className="price old">
                110
                <sub>D</sub>
              </div>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
          </div>
          <div className="plus">
            <img src="images/equal.png" alt="" />
          </div>
          <div className="equal-block">
            <div className="sum">
              110
              <sub>D</sub>
            </div>
            <div className="sale-block d-flex">
              <div className="sale">-70%</div>
              <div className="old-sum">
                110
                <sub>D</sub>
              </div>
            </div>
            <a href="#!" className="bag-btn d-flex">
              კალათა
              <img src="images/arrow-right.svg" alt="arrow" />
              <img
                src="images/arrow-right_red.svg"
                alt="arrow"
                className="red"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="like-prod likes-slider">
        <h3 className="title text-center">მსგავსი პროდუქტები</h3>
        <div className="like-prod_content">
          <div className="container">
            <div className="swiper-container like-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider1.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider2.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider3.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml Calvin Klein All, 100ml Calvin Klein
                    All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider4.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider5.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider1.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider1.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add Arrows */}
          <div className="swiper-button-next d-flex align-items-center justify-content-center">
            <i className="fas fa-angle-right" />
          </div>
          <div className="swiper-button-prev d-flex align-items-center justify-content-center">
            <i className="fas fa-angle-left" />
          </div>
        </div>
      </div>
      <div className="line-sliders d-none d-sm-block" />
      <div className="like-prod others-buy">
        <h3 className="title text-center">რა იყიდეს სხვებმა</h3>
        <div className="others-cont">
          <div className="container">
            <div className="swiper-container others-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider1.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider2.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider3.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml Calvin Klein All, 100ml Calvin Klein
                    All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider4.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider5.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider1.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <a href="#!" className="img">
                      <img src="uploads/images/slider1.png" alt="photo1" />
                    </a>
                    <div className="option d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </div>
                        <span className="rateNum">(123)</span>
                      </div>
                      <div className="d-flex">
                        <button className="heart">
                          <img src="images/heart-dark.svg" alt="favorite" />
                          <img
                            src="images/loved.svg"
                            alt="favorite"
                            className="added"
                          />
                        </button>
                        <button className="cart">
                          <img src="images/bag-dark.svg" alt="cart" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#!" className="news_link">
                    Calvin Klein All, 100ml
                  </a>
                  <div className="price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add Arrows */}
          <div className="swiper-button-next d-flex align-items-center justify-content-center">
            <i className="fas fa-angle-right" />
          </div>
          <div className="swiper-button-prev d-flex align-items-center justify-content-center">
            <i className="fas fa-angle-left" />
          </div>
        </div>
      </div>
      <div className="line-sliders d-none d-sm-block" />
      <div className="review-content">
        <div className="top d-sm-flex d-none flex-column align-items-center">
          <h3 className="title">განხილვები</h3>
          <div className="d-flex align-items-center">
            <div className="rate">
              <i className="fa fa-star checked" />
              <i className="fa fa-star checked" />
              <i className="fa fa-star checked" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="num">
              (<span>87</span> განხილვა)
            </div>
          </div>
        </div>
        <div className="review-block">
          <div className="container">
            <div className="reviews-list">
              <div className="review-block_item">
                <div className="rate">
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                </div>
                <h4 className="title">საუკეთესო სერვისი თბილისში</h4>
                <h5 className="user">anatoidze</h5>
                <p className="txt">
                  ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                  ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად
                  აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების
                  სურნელებათა თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო
                  განკუთვნილია როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
                </p>
              </div>
              <div className="review-block_item">
                <div className="rate">
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                </div>
                <h4 className="title">ძალიან კარგი პერსონალი გყავთ ^^</h4>
                <h5 className="user">anatoidze</h5>
                <p className="txt">
                  წერეთელის ფილიალში გყავთ ძალიან ყურადღებიანი და საყვარელი
                  კონსულტანტები. &lt;3 &lt;3 საუკეთესო ფილიალია.
                </p>
              </div>
              <div className="review-block_item">
                <div className="rate">
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                </div>
                <h4 className="title">საუკეთესო სერვისი თბილისში</h4>
                <h5 className="user">anatoidze</h5>
                <p className="txt">
                  ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                  ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად
                  აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების
                  სურნელებათა თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო
                  განკუთვნილია როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
                </p>
              </div>
            </div>
            <div className="pagination">
              გვერდები:
              <div className="pages">
                <span className="pages-link">1</span>
                <a href="#!" className="pages-link">
                  2
                </a>
                <a href="#!" className="pages-link">
                  3
                </a>
                <a href="#!" className="pages-link">
                  4
                </a>
                <a href="#!" className="pages-link">
                  5
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
