import React, { ReactElement, useEffect } from "react";
import { Layout } from "../../layout";

interface NewsSliderProps {}

export const NewsSlider: React.FC<NewsSliderProps> = props => {
  useEffect(() => {
    let windowM: any = window;
    windowM.newsSlider();
  }, []);
  return (
    <section className="slider-section news__slide" data-aos="fade-up">
      <div className="slider-section-top">
        <div className=" d-flex align-items-center justify-content-sm-center justify-content-between xs-titlesblock">
          <h3 className="slider-section-top_title section-title">სიახლეები</h3>
          <a href="#!" className="slider-section-top_link">
            <span>/</span>მეტის ნახვა (250)
          </a>
        </div>
        <div className="line" />
        <div className="menu d-flex justify-content-center align-items-center">
          <a href="#!" className="menu_link active">
            ყველა
          </a>
          <a href="#!" className="menu_link">
            სუნამოები
          </a>
          <a href="#!" className="menu_link">
            კანის მოვლა
          </a>
          <a href="#!" className="menu_link">
            მაკიაჟი
          </a>
          <a href="#!" className="menu_link">
            პარაფარმაცია
          </a>
        </div>
      </div>
      <div className="slider news-slide">
        <div className="container">
          <div className="swiper-container newsslider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="image">
                  <a href="#!" className="img">
                    <img
                      src="/assets/uploads/images/slider1.png"
                      alt="photo1"
                    />
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
                        <img
                          src="/assets/images/heart-dark.svg"
                          alt="favorite"
                        />
                        <img
                          src="/assets/images/loved.svg"
                          alt="favorite"
                          className="added"
                        />
                      </button>
                      <button className="cart">
                        <img src="/assets/images/bag-dark.svg" alt="cart" />
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
                    <img
                      src="/assets/uploads/images/slider2.png"
                      alt="photo1"
                    />
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
                        <img
                          src="/assets/images/heart-dark.svg"
                          alt="favorite"
                        />
                        <img
                          src="/assets/images/loved.svg"
                          alt="favorite"
                          className="added"
                        />
                      </button>
                      <button className="cart">
                        <img src="/assets/images/bag-dark.svg" alt="cart" />
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
                    <img
                      src="/assets/uploads/images/slider3.png"
                      alt="photo1"
                    />
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
                        <img
                          src="/assets/images/heart-dark.svg"
                          alt="favorite"
                        />
                        <img
                          src="/assets/images/loved.svg"
                          alt="favorite"
                          className="added"
                        />
                      </button>
                      <button className="cart">
                        <img src="/assets/images/bag-dark.svg" alt="cart" />
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
                    <img
                      src="/assets/uploads/images/slider4.png"
                      alt="photo1"
                    />
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
                        <img
                          src="/assets/images/heart-dark.svg"
                          alt="favorite"
                        />
                        <img
                          src="/assets/images/loved.svg"
                          alt="favorite"
                          className="added"
                        />
                      </button>
                      <button className="cart">
                        <img src="/assets/images/bag-dark.svg" alt="cart" />
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
                    <img
                      src="/assets/uploads/images/slider5.png"
                      alt="photo1"
                    />
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
                        <img
                          src="/assets/images/heart-dark.svg"
                          alt="favorite"
                        />
                        <img
                          src="/assets/images/loved.svg"
                          alt="favorite"
                          className="added"
                        />
                      </button>
                      <button className="cart">
                        <img src="/assets/images/bag-dark.svg" alt="cart" />
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
                    <img
                      src="/assets/uploads/images/slider1.png"
                      alt="photo1"
                    />
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
                        <img
                          src="/assets/images/heart-dark.svg"
                          alt="favorite"
                        />
                        <img
                          src="/assets/images/loved.svg"
                          alt="favorite"
                          className="added"
                        />
                      </button>
                      <button className="cart">
                        <img src="/assets/images/bag-dark.svg" alt="cart" />
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
                    <img
                      src="/assets/uploads/images/slider1.png"
                      alt="photo1"
                    />
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
                        <img
                          src="/assets/images/heart-dark.svg"
                          alt="favorite"
                        />
                        <img
                          src="/assets/images/loved.svg"
                          alt="favorite"
                          className="added"
                        />
                      </button>
                      <button className="cart">
                        <img src="/assets/images/bag-dark.svg" alt="cart" />
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
    </section>
  );
};
