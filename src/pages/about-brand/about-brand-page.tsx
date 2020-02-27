import React from "react";

interface AboutBrandPageProps {}

export const AboutBrandPage: React.FC<AboutBrandPageProps> = props => {
  return (
    <>
      <div className="container">
        <div className="about-brand">
          <h1 className="brand-title text-center">
            <img
              src="/assets/uploads/images/chanel.png"
              alt="chanel"
              className="img-title"
            />
            <div className="d-none">CHANEL</div>
          </h1>
          <div className="swiper-container brand-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-banner">
                  <img
                    src="/assets/uploads/images/brand-banner.png"
                    alt="chanel banner"
                  />
                  <div className="bg" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-banner">
                  <img
                    src="/assets/uploads/images/brand-banner.png"
                    alt="chanel banner"
                  />
                  <div className="bg" />
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
          <div className="d-flex flex-column align-items-center">
            <h2 className="title">ბრენდის ისტორია</h2>
            <p className="txt text-center">
              ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
              ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად აფასებენ
              ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების სურნელებათა
              თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო განკუთვნილია
              როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
            </p>
            <div className="about-brand_content">
              <div className="row">
                <div className="col-sm-5">
                  <div className="image">
                    <img src="/assets/uploads/images/eifel.png" alt="eiffel" />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="desc d-flex flex-column justify-content-center">
                    <h2 className="desc_title">როგორ დაიწყო?</h2>
                    <p className="txt">
                      ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                      ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად
                      აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს
                      ბაღების სურნელებათა თემას, რომელიც 2003 წლიდან იღებს
                      სათავეს… სუნამო განკუთვნილია როგორც ქალბატონებისთვის,
                      ასევე მამაკაცებისთვის.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row flex-sm-row flex-column-reverse">
                <div className="col-sm-7">
                  <div className="desc d-flex flex-column align-items-sm-end align-items-center justify-content-center">
                    <h2 className="desc_title text-right">სად შეიქმნა</h2>
                    <p className="txt text-right">
                      ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                      ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად
                      აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს
                      ბაღების სურნელებათა თემას, რომელიც 2003 წლიდან იღებს
                      სათავეს… სუნამო განკუთვნილია როგორც ქალბატონებისთვის,
                      ასევე მამაკაცებისთვის.
                    </p>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="image">
                    <img src="/assets/uploads/images/chanel5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5">
                  <div className="image">
                    <img src="/assets/uploads/images/chanelbleu.png" alt="" />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="desc d-flex flex-column justify-content-center">
                    <h2 className="desc_title">უახლესი კოლექცია</h2>
                    <p className="txt">
                      ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                      ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად
                      აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს
                      ბაღების სურნელებათა თემას, რომელიც 2003 წლიდან იღებს
                      სათავეს… სუნამო განკუთვნილია როგორც ქალბატონებისთვის,
                      ასევე მამაკაცებისთვის.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
