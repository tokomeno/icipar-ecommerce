import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { SliderService, ISlider } from "../../services/slider.http";

interface MainSliderProps {}

const params = {
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".main-slider-lg .swiper-pagination",
    clickable: true
  }
};
export const MainSlider: React.FC<MainSliderProps> = () => {
  const [sliders, setSliders] = useState<ISlider[]>([]);

  useEffect(() => {
    SliderService.getMainSlider()
      .then(res => {
        if (res.data.data) {
          setSliders(res.data.data);
        }
      })
      .catch(err => {
        alert("დაფიქსირდა შეცდომა");
        console.log(err);
      });
  }, []);

  return (
    <div className="main-slider">
      <div className="swiper-container main-slider-lg">
        {sliders.length > 0 ? (
          <Swiper
            wrapperClass="swiper-wrapper"
            containerClass="swiper-container main-slider-lg"
            {...params}
          >
            {sliders.map((slider, i) => (
              <Item slider={slider} key={i} />
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

interface ItemProps {
  slider: ISlider;
}
const Item: React.FC<ItemProps> = ({ slider }) => {
  // const { t } = useTranslation();
  return (
    <div className="swiper-slide d-flex align-items-center justify-content-center">
      <div className="container swiper-slide-content flex-sm-row flex-column">
        <img
          src={slider.image}
          // src="/assets/uploads/images/slide1.png"
          alt="chanel"
          className="main-photo d-none d-sm-block"
        />
        {/* xs */}
        <img
          src={slider.image}
          // src="/assets/uploads/images/slide1-xs.png"
          alt="chanel"
          className="main-photo d-block d-sm-none"
        />
        <div className="desc text-center">
          <a href="#!" className="d-block">
            <h2 className="desc_title">{slider.title}</h2>
          </a>

          <Link
            to={slider.link_href}
            className="desc_link d-none d-md-inline-block"
          >
            {slider.link_title}
            <img src="/assets/images/arrow-right.svg" alt="arrow" />
            <img
              src="/assets/images/arrow-right_red.svg"
              alt="arrow"
              className="red"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
