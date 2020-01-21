import React, { ReactElement, useEffect } from "react";
import { Layout } from "../../layout";
import { MainSlider } from "./mainSlider";
import { HotSlider } from "./hotSlider";

import { ProductSlider } from "../../components/producSlider/productSlider";
import { productCategories } from "../../data/categories";
import { dummyProductData } from "../../data/product";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = props => {
  let windowM: any = window;
  useEffect(() => {
    windowM.grid1();
    windowM.grid2();
    windowM.menuSort();
    windowM.rating();
    windowM.blogSlider();
    windowM.brandsSlider();
    windowM.commentSlider();
    windowM.option();
    windowM.searchDrop();
  }, []);
  return (
    <Layout>
      <MainSlider />
      <div className="container d-none d-md-block">
        <div className="grid">
          <div className="row">
            <div
              className="col-md-3"
              data-aos="fade-right"
              data-aos-duration={1200}
            >
              <a href="#!" className="d-block">
                <div className="swiper-container grid-item grid1-cont">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="grid1">
                        <div className="title">სიახლე</div>
                        <img
                          src="/assets/uploads/images/grid1.png"
                          alt="mexx"
                          className="bg-photo"
                        />
                        <div className="descr text-center">
                          <h4 className="prod-title">
                            Calvin Klein All, 100ml
                          </h4>
                          <div className="price">
                            110
                            <sub>D</sub>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="grid1">
                        <div className="title">სიახლე</div>
                        <img
                          src="/assets/uploads/images/grid1.png"
                          alt="mexx"
                          className="bg-photo"
                        />
                        <div className="descr text-center">
                          <h4 className="prod-title">
                            Calvin Klein All, 100ml
                          </h4>
                          <div className="price">
                            110
                            <sub>D</sub>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </a>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div
                  className="col-md-8"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                >
                  <a href="#!" className="d-block">
                    <div className="swiper-container grid-item row-item grid2-cont">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="grid2">
                            <div className="title">ბანდლი</div>
                            <img
                              src="/assets/uploads/images/grid2.png"
                              alt="bundle"
                              className="bg-photo"
                            />
                            <div className="desc">
                              <h4 className="prod-title">
                                საგაზაფცულო კოსმეტიკის
                                <br />
                                ნაკრები
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-pagination" />
                    </div>
                  </a>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-left"
                  data-aos-duration={1600}
                >
                  <a href="#!" className="grid3 grid-item row-item d-block">
                    <img
                      src="/assets/uploads/images/grid3.png"
                      alt="bundle"
                      className="bg-photo"
                    />
                    <div className="desc">
                      <h4 className="prod-title">
                        სუნამოს
                        <br />
                        შერჩევის ხელოვნება
                      </h4>
                      <div className="continue d-flex justify-content-between align-items-center">
                        გაგრძელება
                        <img
                          src="/assets/images/arrow-right_dark.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row last-row">
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration={800}
                >
                  <a href="#!" className="grid4 grid-item row-item d-block">
                    <img
                      src="/assets/uploads/images/grid4.png"
                      alt="creme"
                      className="bg-photo"
                    />
                    <div className="desc">
                      <h4 className="prod-title">
                        ევროპის
                        <br />
                        ტრენდი
                      </h4>
                    </div>
                  </a>
                </div>
                <div
                  className="col-md-8"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <a href="#!" className="d-block grid5 grid-item row-item">
                    <img
                      src="/assets/uploads/images/grid5.png"
                      alt="grid"
                      className="bg-photo"
                    />
                    <div className="desc">
                      <h4 className="prod-title">
                        კოსმეტიკა მგძნობიარე
                        <br />
                        კანისათვის
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HotSlider />
      <ProductSlider
        title="სიახლეები"
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
        initSlider={windowM.newsSlider}
        classes={{ sectionClasses: ["news__slide"] }}
      />
      <ProductSlider
        initSlider={() => {}}
        classes={{ sectionClasses: ["saleslider"] }}
        title="ფასდაკლება"
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
      />
      <ProductSlider
        initSlider={() => {}}
        classes={{ sectionClasses: ["bestsellerslider"] }}
        title="ბესტსელერები"
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
      />
      <ProductSlider
        initSlider={() => {}}
        classes={{ sectionClasses: ["recommendedslider"] }}
        title="რეკომენდაციები"
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
      />
      <section className="blogSection" data-aos="fade-up">
        <div className="blogSlider-top">
          <div className="container">
            <div className="d-flex flex-column flex-md-row">
              <h3 className="news-titleBlock_title  section-title">
                <img src="/assets/images/blog-icon.svg" alt="blog icon" />
                ბლოგი
              </h3>
              <div className="menu d-flex align-items-center">
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
          </div>
        </div>
        <div className="blogSlider">
          <div className="container">
            <div className="swiper-container blog-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="image">
                    <img src="/assets/uploads/images/blog1.png" alt="blog" />
                  </div>
                  <div className="desc">
                    <div className="date">23 თებერვალი, 2019</div>
                    <div className="title">სუნამოს შერჩევის ხელოვნება</div>
                    <p className="txt">
                      ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი
                      სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი
                      გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან
                      ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც
                      კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს,
                      ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.{" "}
                    </p>
                    <a
                      href="#!"
                      className="next d-flex align-items-center justify-content-between"
                    >
                      გაგრძელება
                      <img
                        src="/assets/images/arrow-right_dark.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img src="/assets/uploads/images/blog2.png" alt="blog" />
                  </div>
                  <div className="desc">
                    <div className="date">23 თებერვალი, 2019</div>
                    <div className="title">სუნამოს შერჩევის ხელოვნება</div>
                    <p className="txt">
                      ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი
                      სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი
                      გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან
                      ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც
                      კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს,
                      ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.{" "}
                    </p>
                    <a
                      href="#!"
                      className="next d-flex align-items-center justify-content-between"
                    >
                      გაგრძელება
                      <img
                        src="/assets/images/arrow-right_dark.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img src="/assets/uploads/images/blog3.png" alt="blog" />
                  </div>
                  <div className="desc">
                    <div className="date">23 თებერვალი, 2019</div>
                    <div className="title">სუნამოს</div>
                    <p className="txt">
                      სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით
                    </p>
                    <a
                      href="#!"
                      className="next d-flex align-items-center justify-content-between"
                    >
                      გაგრძელება
                      <img
                        src="/assets/images/arrow-right_dark.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img src="/assets/uploads/images/blog4.png" alt="blog" />
                  </div>
                  <div className="desc">
                    <div className="date">23 თებერვალი, 2019</div>
                    <div className="title">სუნამოს შერჩევის ხელოვნება</div>
                    <p className="txt">
                      ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი
                      სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი
                      გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან
                      ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც
                      კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს,
                      ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.{" "}
                    </p>
                    <a
                      href="#!"
                      className="next d-flex align-items-center justify-content-between"
                    >
                      გაგრძელება
                      <img
                        src="/assets/images/arrow-right_dark.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img src="/assets/uploads/images/blog1.png" alt="blog" />
                  </div>
                  <div className="desc">
                    <div className="date">23 თებერვალი, 2019</div>
                    <div className="title">სუნამოს შერჩევის ხელოვნება</div>
                    <p className="txt">
                      ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი
                      სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი
                      გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან
                      ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც
                      კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს,
                      ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.{" "}
                    </p>
                    <a
                      href="#!"
                      className="next d-flex align-items-center justify-content-between"
                    >
                      გაგრძელება
                      <img
                        src="/assets/images/arrow-right_dark.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image">
                    <img src="/assets/uploads/images/blog2.png" alt="blog" />
                  </div>
                  <div className="desc">
                    <div className="date">23 თებერვალი, 2019</div>
                    <div className="title">სუნამოს შერჩევის ხელოვნება</div>
                    <p className="txt">
                      ალბათ ყველას გვქონია მომენტი, როდესაც მივეშურებით ახალი
                      სუნამოს შესაძენად, მაგრამ ზუსტად არ ვიცით როგორი არომატი
                      გვსურს. სუნამოს შეძენისას, ხან ბრენდით ვიხიბლებით, ხან
                      ვიზუალით, ხან მეგობრის რჩევას ვითვალისწინებთ, ხანაც
                      კონსულტანტის. ხშირ შემთხვევაში ამართლებს და მოგვწონს,
                      ხანდახან კი გვაწუხებს და დისკომფორტის შეგრძნებას იწვევს.{" "}
                    </p>
                    <a
                      href="#!"
                      className="next d-flex align-items-center justify-content-between"
                    >
                      გაგრძელება
                      <img
                        src="/assets/images/arrow-right_dark.svg"
                        alt="arrow"
                      />
                    </a>
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
      <section className="brands">
        <div className="container">
          <h3 className="brands-title text-center section-title">
            ჩვენი ბრენდები
          </h3>
          <div className="slider">
            <div className="swiper-container brands-slider">
              <div className="swiper-wrapper">
                <a href="#!" className="swiper-slide">
                  <img src="/assets/uploads/images/brand1.png" alt="chanel" />
                </a>
                <a href="#!" className="swiper-slide">
                  <img src="/assets/uploads/images/brand2.png" alt="versace" />
                </a>
                <a href="#!" className="swiper-slide">
                  <img src="/assets/uploads/images/brand3.png" alt="hermes" />
                </a>
                <a href="#!" className="swiper-slide">
                  <img src="/assets/uploads/images/brand4.png" alt="moschino" />
                </a>
                <a href="#!" className="swiper-slide">
                  <img src="/assets/uploads/images/brand5.png" alt="burberry" />
                </a>
                <a href="#!" className="swiper-slide">
                  <img
                    src="/assets/uploads/images/brand6.png"
                    alt="calvin klein"
                  />
                </a>
                <a href="#!" className="swiper-slide">
                  <img src="/assets/uploads/images/brand1.png" alt="chanel" />
                </a>
              </div>
            </div>
            <div className="swiper-button-next">
              <img src="/assets/images/next.svg" alt="next" />
            </div>
            <div className="swiper-button-prev">
              <img src="/assets/images/next.svg" alt="prev" />
            </div>
          </div>
        </div>
      </section>
      <div className="comments">
        <div className="container">
          <div className="swiper-container comment-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide d-flex flex-column align-items-center justify-content-center">
                <div className="rate">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <div className="comment">საუკეთესო სერვისი თბილისში</div>
                <div className="user">ანა თოიძე</div>
              </div>
              <div className="swiper-slide d-flex flex-column align-items-center justify-content-center">
                <div className="rate">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                </div>
                <div className="comment">საუკეთესო სერვისი თბილისში</div>
                <div className="user">ანა თოიძე</div>
              </div>
              <div className="swiper-slide d-flex flex-column align-items-center justify-content-center">
                <div className="rate">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <div className="comment">საუკეთესო სერვისი თბილისში</div>
                <div className="user">ანა თოიძე</div>
              </div>
              <div className="swiper-slide d-flex flex-column align-items-center justify-content-center">
                <div className="rate">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <div className="comment">საუკეთესო სერვისი თბილისში</div>
                <div className="user">ანა თოიძე</div>
              </div>
              <div className="swiper-slide d-flex flex-column align-items-center justify-content-center">
                <div className="rate">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <div className="comment">საუკეთესო სერვისი თბილისში</div>
                <div className="user">ანა თოიძე</div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next d-flex align-items-center justify-content-center">
          <i className="fas fa-angle-right" />
        </div>
        <div className="swiper-button-prev d-flex align-items-center justify-content-center">
          <i className="fas fa-angle-left" />
        </div>
      </div>
      <div className="container" data-aos="fade-down">
        <div className="insta text-center">
          <img src="/assets/images/insta.svg" alt="instagram" />
          <div className="insta-block">
            <div className="bg d-block d-md-none" />
            <a href="#!" className="insta-block_btn">
              გამოგვყევით ინსტაგრამზე
            </a>
          </div>
        </div>
      </div>
      <div className="stores" />
    </Layout>
  );
};
