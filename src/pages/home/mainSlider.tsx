import React, { ReactElement, useEffect } from "react";
import { Layout } from "../../layout";

interface MainSliderProps {}

export const MainSlider: React.FC<MainSliderProps> = props => {
  useEffect(() => {
    let windowM: any = window;
    windowM.mainSlider();
  }, []);
  return (
    <div className="main-slider">
      <div className="swiper-container main-slider-lg">
        <div className="swiper-wrapper">
          <div className="swiper-slide d-flex align-items-center justify-content-center">
            <div className="container swiper-slide-content flex-sm-row flex-column">
              <img
                src="/assets/uploads/images/slide1.png"
                alt="chanel"
                className="main-photo d-none d-sm-block"
              />
              <img
                src="/assets/uploads/images/slide1-xs.png"
                alt="chanel"
                className="main-photo d-block d-sm-none"
              />
              <div className="desc text-center">
                <a href="#!" className="d-block">
                  <h2 className="desc_title">
                    <span>სუნამო ყველაზე</span>
                    <span>მოდური ქალბატონებისთვის</span>
                  </h2>
                </a>
                <a href="#!" className="desc_link d-none d-md-inline-block">
                  შეძენა
                  <img src="/assets/images/arrow-right.svg" alt="arrow" />
                  <img
                    src="/assets/images/arrow-right_red.svg"
                    alt="arrow"
                    className="red"
                  />
                </a>
              </div>
            </div>
          </div>
          {/*<div class="swiper-slide d-flex align-items-center justify-content-center">*/}
          {/*<div class="container swiper-slide-content flex-sm-row flex-column">*/}
          {/*<img src="/assets/uploads/images/slide1.png" alt="chanel" class="main-photo d-none d-sm-block">*/}
          {/*<img src="/assets/uploads/images/slide1-xs.png" alt="chanel" class="main-photo d-block d-sm-none">*/}
          {/*<div class="desc text-center">*/}
          {/*<a href="#!" class="d-block">*/}
          {/*<h2 class="desc_title">*/}
          {/*<span>სუნამო ყველაზე</span>*/}
          {/*<span>მოდური ქალბატონებისთვის</span>*/}
          {/*</h2>*/}
          {/*</a>*/}
          {/*<a href="#!" class="desc_link d-none d-md-inline-block">შეძენა*/}
          {/*<img src="/assets/images/arrow-right.svg" alt="arrow">*/}
          {/*<img src="/assets/images/arrow-right_red.svg" alt="arrow" class="red">*/}
          {/*</a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div class="swiper-slide d-flex align-items-center justify-content-center">*/}
          {/*<div class="container swiper-slide-content flex-sm-row flex-column">*/}
          {/*<img src="/assets/uploads/images/slide1.png" alt="chanel" class="main-photo d-none d-sm-block">*/}
          {/*<img src="/assets/uploads/images/slide1-xs.png" alt="chanel" class="main-photo d-block d-sm-none">*/}
          {/*<div class="desc text-center">*/}
          {/*<a href="#!" class="d-block">*/}
          {/*<h2 class="desc_title">*/}
          {/*<span>სუნამო ყველაზე</span>*/}
          {/*<span>მოდური ქალბატონებისთვის</span>*/}
          {/*</h2>*/}
          {/*</a>*/}
          {/*<a href="#!" class="desc_link d-none d-md-inline-block">შეძენა*/}
          {/*<img src="/assets/images/arrow-right.svg" alt="arrow">*/}
          {/*<img src="/assets/images/arrow-right_red.svg" alt="arrow" class="red">*/}
          {/*</a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};
