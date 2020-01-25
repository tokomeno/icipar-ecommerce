import React, { useEffect } from "react";
import { productCategories } from "../../data/categories";
import { useTranslation } from "react-i18next";

interface HotSliderProps {}

export const HotSlider: React.FC<HotSliderProps> = props => {
  const { t } = useTranslation();
  useEffect(() => {
    let windowM: any = window;
    windowM.hotSlider();
  }, []);
  return (
    <section className="slider-section hot__slide" data-aos-off="fade-up">
      <div className="slider-section-top">
        <div className=" d-flex align-items-center justify-content-sm-center justify-content-between xs-titlesblock">
          <h3 className="slider-section-top_title section-title">
            {t("hotOffer")}
          </h3>
          <a href="#!" className="slider-section-top_link">
            <span>/</span>მეტის ნახვა (250)
          </a>
        </div>
        <div className="line" />
        <div className="menu d-flex justify-content-center align-items-center">
          {productCategories.map(i => (
            <a href="#!" key={i.id} className="menu_link">
              {i.title}
            </a>
          ))}
        </div>
      </div>
      <div className="slider hot-slide">
        <div className="container">
          <div className="swiper-container hotSlider">
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
                <div className="hot-block d-flex">
                  <div className="timer d-flex flex-column align-items-center justify-content-center">
                    <div className="timer-num d-flex justify-content-center">
                      <div className="num-item">00</div>
                      <div className="num-item">11</div>
                      <div className="num-item dark">07</div>
                      <div className="num-item dark">32</div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="bag d-flex align-items-center justify-content-center"
                  >
                    <img src="/assets/images/bagwhite.svg" alt="bag" />
                    <img
                      src="/assets/images/bag-r.svg"
                      alt="bag"
                      className="red"
                    />
                  </a>
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
                <div className="hot-block d-flex">
                  <div className="timer d-flex flex-column align-items-center justify-content-center">
                    <div className="timer-num d-flex justify-content-center">
                      <div className="num-item">00</div>
                      <div className="num-item">11</div>
                      <div className="num-item dark">07</div>
                      <div className="num-item dark">32</div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="bag d-flex align-items-center justify-content-center"
                  >
                    <img src="/assets/images/bagwhite.svg" alt="bag" />
                    <img
                      src="/assets/images/bag-r.svg"
                      alt="bag"
                      className="red"
                    />
                  </a>
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
                <div className="hot-block d-flex">
                  <div className="timer d-flex flex-column align-items-center justify-content-center">
                    <div className="timer-num d-flex justify-content-center">
                      <div className="num-item">00</div>
                      <div className="num-item">11</div>
                      <div className="num-item dark">07</div>
                      <div className="num-item dark">32</div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "30%" }} />
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="bag d-flex align-items-center justify-content-center"
                  >
                    <img src="/assets/images/bagwhite.svg" alt="bag" />
                    <img
                      src="/assets/images/bag-r.svg"
                      alt="bag"
                      className="red"
                    />
                  </a>
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
                <div className="hot-block d-flex">
                  <div className="timer d-flex flex-column align-items-center justify-content-center">
                    <div className="timer-num d-flex justify-content-center">
                      <div className="num-item">00</div>
                      <div className="num-item">11</div>
                      <div className="num-item dark">07</div>
                      <div className="num-item dark">32</div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "10%" }} />
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="bag d-flex align-items-center justify-content-center"
                  >
                    <img src="/assets/images/bagwhite.svg" alt="bag" />
                    <img
                      src="/assets/images/bag-r.svg"
                      alt="bag"
                      className="red"
                    />
                  </a>
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
                <div className="hot-block d-flex">
                  <div className="timer d-flex flex-column align-items-center justify-content-center">
                    <div className="timer-num d-flex justify-content-center">
                      <div className="num-item">00</div>
                      <div className="num-item">11</div>
                      <div className="num-item dark">07</div>
                      <div className="num-item dark">32</div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "90%" }} />
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="bag d-flex align-items-center justify-content-center"
                  >
                    <img src="/assets/images/bagwhite.svg" alt="bag" />
                    <img
                      src="/assets/images/bag-r.svg"
                      alt="bag"
                      className="red"
                    />
                  </a>
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
                <div className="hot-block d-flex">
                  <div className="timer d-flex flex-column align-items-center justify-content-center">
                    <div className="timer-num d-flex justify-content-center">
                      <div className="num-item">00</div>
                      <div className="num-item">11</div>
                      <div className="num-item dark">07</div>
                      <div className="num-item dark">32</div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="bag d-flex align-items-center justify-content-center"
                  >
                    <img src="/assets/images/bagwhite.svg" alt="bag" />
                    <img
                      src="/assets/images/bag-r.svg"
                      alt="bag"
                      className="red"
                    />
                  </a>
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
                <div className="hot-block d-flex">
                  <div className="timer d-flex flex-column align-items-center justify-content-center">
                    <div className="timer-num d-flex justify-content-center">
                      <div className="num-item">00</div>
                      <div className="num-item">11</div>
                      <div className="num-item dark">07</div>
                      <div className="num-item dark">32</div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "25%" }} />
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="bag d-flex align-items-center justify-content-center"
                  >
                    <img src="/assets/images/bagwhite.svg" alt="bag" />
                    <img
                      src="/assets/images/bag-r.svg"
                      alt="bag"
                      className="red"
                    />
                  </a>
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
