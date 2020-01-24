import React from "react";

interface ProductContentProps {}

export const ProductContent: React.FC<ProductContentProps> = props => {
  return (
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
        <a className="prod-menu_link nav-link" data-toggle="tab" href="#mesame">
          გამოყენების წესი
        </a>
        <a className="prod-menu_link nav-link" data-toggle="tab" href="#meotxe">
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
                alt=""
                className="main-photo"
              />
              <h2 className="title">პროდუქტის სრული სახელწოდება</h2>
              <p className="txt text-center">
                ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად აფასებენ
                ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების სურნელებათა
                თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო განკუთვნილია
                როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
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
  );
};
