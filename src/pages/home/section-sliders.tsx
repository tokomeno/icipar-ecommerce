import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { useTranslation } from "react-i18next";
import { axiosWithToken } from "../../api/axios-with-token";
import { MAIN_SECITIONS } from "../../api/endpoints";
import { useHistory, NavLink } from "react-router-dom";

interface ISectionSliders {
  latest_product: Latestproduct[];
  bundle: Latestproduct[];
  post_small: Latestproduct[];
  post_large: Latestproduct[];
  post_arrowed: Latestproduct[];
}

interface Latestproduct {
  section_type: string;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

interface SectionSlidersProps {}
const sliderParams = {
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};

export const SectionSliders: React.FC<SectionSlidersProps> = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [sliderSections, setSliderSections] = useState<ISectionSliders | null>(
    null
  );
  useEffect(() => {
    axiosWithToken
      .get<ISectionSliders>(MAIN_SECITIONS)
      .then(res => {
        console.log(res.data);
        setSliderSections(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!sliderSections) return null;

  if (
    sliderSections.post_arrowed.length === 0 ||
    sliderSections.post_small.length === 0 ||
    sliderSections.post_large.length === 0
  )
    return null;

  const arrowSl = sliderSections.post_arrowed[0];
  const smallSl = sliderSections.post_small[0];
  const largeSl = sliderSections.post_large[0];

  return (
    <div className="container d-none d-md-block">
      <div className="grid">
        <div className="row">
          <div
            className="col-md-3"
            data-aos-r="fade-right"
            data-aos-r-duration={1200}
          >
            <div className="d-block">
              <Swiper
                {...sliderParams}
                wrapperClass="swiper-wrapper"
                containerClass="swiper-container grid-item grid1-cont"
              >
                {sliderSections.latest_product.map(sl => (
                  <div className="swiper-slide">
                    <div
                      className="grid1"
                      onClick={() => {
                        history.push(sl.link);
                      }}
                    >
                      <div className="title">{t("siaxle")}</div>
                      <img src={sl.image} alt="mexx" className="bg-photo" />
                      <div className="descr text-center">
                        <h4 className="prod-title">{sl.title}</h4>
                        <div className="price">{sl.subtitle}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div
                className="col-md-8"
                data-aos-r-off="fade-up"
                data-aos-r-duration={1200}
              >
                <a href="#!" className="d-block">
                  <Swiper
                    {...sliderParams}
                    wrapperClass="swiper-wrapper"
                    containerClass="swiper-container grid-item row-item grid2-cont"
                  >
                    {sliderSections.bundle.map(sl => (
                      <div className="swiper-slide">
                        <div
                          className="grid2"
                          onClick={() => {
                            history.push(sl.link);
                          }}
                        >
                          <div className="title">{t("bundle")}</div>
                          <img
                            src={sl.image}
                            alt="bundle"
                            className="bg-photo"
                          />
                          <div className="desc">
                            <h4 className="prod-title">{sl.title}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Swiper>
                </a>
              </div>
              <div
                className="col-md-4"
                data-aos-r="fade-left"
                data-aos-r-duration={1600}
              >
                <NavLink
                  to={arrowSl.link}
                  className="grid3 grid-item row-item d-block"
                >
                  <img src={arrowSl.image} alt="bundle" className="bg-photo" />
                  <div className="desc">
                    <h4 className="prod-title">{arrowSl.title}</h4>
                    <div className="continue d-flex justify-content-between align-items-center">
                      {t("continiue")}
                      <img
                        src="/assets/images/arrow-right_dark.svg"
                        alt="arrow"
                      />
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="row last-row">
              <div
                className="col-md-4"
                data-aos-r-off="fade-up"
                data-aos-r-duration={800}
              >
                <NavLink
                  to={smallSl.link}
                  className="grid4 grid-item row-item d-block"
                >
                  <img src={smallSl.image} alt="creme" className="bg-photo" />
                  <div className="desc">
                    <h4 className="prod-title">{smallSl.title}</h4>
                  </div>
                </NavLink>
              </div>
              <div
                className="col-md-8"
                data-aos-r="fade-left"
                data-aos-r-duration={1200}
              >
                <NavLink
                  to={largeSl.link}
                  className="d-block grid5 grid-item row-item"
                >
                  <img src={largeSl.image} alt="grid" className="bg-photo" />
                  <div className="desc">
                    <h4 className="prod-title">{largeSl.title}</h4>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
