import React from "react";
import { Layout } from "../../layout";

interface BlogSliderProps {}

export const BlogSlider: React.FC<BlogSliderProps> = props => {
  return (
    <section className="blogSection" data-aos="fade-up">
      <div className="blogSlider-top">
        <div className="container">
          <div className="d-flex flex-column flex-md-row">
            <h3 className="news-titleBlock_title  section-title">
              <img src="images/blog-icon.svg" alt="blog icon" />
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
                  <img src="uploads/images/blog1.png" alt="blog photo" />
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
                    <img src="images/arrow-right_dark.svg" alt="arrow" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img src="uploads/images/blog2.png" alt="blog photo" />
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
                    <img src="images/arrow-right_dark.svg" alt="arrow" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img src="uploads/images/blog3.png" alt="blog photo" />
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
                    <img src="images/arrow-right_dark.svg" alt="arrow" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img src="uploads/images/blog4.png" alt="blog photo" />
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
                    <img src="images/arrow-right_dark.svg" alt="arrow" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img src="uploads/images/blog1.png" alt="blog photo" />
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
                    <img src="images/arrow-right_dark.svg" alt="arrow" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image">
                  <img src="uploads/images/blog2.png" alt="blog photo" />
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
                    <img src="images/arrow-right_dark.svg" alt="arrow" />
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
  );
};
