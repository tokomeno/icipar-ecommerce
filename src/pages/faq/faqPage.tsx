import React, { ReactElement, useEffect } from "react";
import { Layout } from "../../layout";
import { PageSideMenu } from "../../components/pageSideMenu";

interface FaqPageProps {}

export const FaqPage: React.FC<FaqPageProps> = props => {
  return (
    <Layout>
      <div className="container">
        <div className="about row">
          <PageSideMenu />
          <div className="col-lg-9">
            <div className="right iframe-block">
              <div className="top">
                <h1 className="title">FAQ</h1>
              </div>
              <div className="desc">
                <div className="faq-block">
                  <div className="faq-block_item">
                    <div className="title">მიწოდების სერვისი თუ გაქვთ?</div>
                    <p className="txt">
                      დიახ გვაქვს და თბილისის მასშტაბით უფასოა, ხოლო რეგიონებში
                      100₾შენაძენის შემთხვევაში უფასოა, ხოლო 100 ლარამდე მიტანის
                      ღირებულება 7₾ შეადგენს.
                    </p>
                  </div>
                  <div className="faq-block_item">
                    <div className="title">სად არის თქვენი ფილიალი?</div>
                    <p className="txt">
                      ისი-პარის ჯამში 19 ფილიალია საქართველოს მასშტაბით:
                      თბილისი-15 ფილიალი, რუსთავი 1 ფილიალი, ქუთაისი 1 ფილიალი,
                      ბათუმი 1 ფილიალი, ფოთი 1 ფილიალი. მისამართებისთვის ეწვიეთ
                      <a href="#!" className="link">
                        ბმულს.
                      </a>
                    </p>
                  </div>
                  <div className="faq-block_item">
                    <p className="txt">
                      სასაჩუქრე ბარათის ღირებულებას თავად განსაზღვრავთ
                      ნებისმიერი თქვენთვის სასურველი თანხით და მოქმედების ვადა
                      შეძენიდან 3 წელია.  სასაჩუქრე ბარათის შესაძენად ეწვიეთ
                      <a href="#!" className="link">
                        ბმულს.
                      </a>
                    </p>
                  </div>
                  <div className="faq-block_item">
                    <div className="title">
                      მოქმედებს თუ არა აქციის დროს ფასდაკლების ბარათი?
                    </div>
                    <p className="txt">
                      არა, ფასდაკლების პერიოდში დამატებით ფასდაკლების ბარათს ვერ
                      იყენებთ, თუმცა იქიდან გამომდინარე, რომ ფასდაკლების %
                      მზარდია დახარჯული თანხიდან გამომდინარე ფასდაკლების დროს
                      შეგიძლიათ გაატაროთ თანხის დასარგოვებლად.  თუ გაინტერესებთ,
                      რა პირობით გაიცემა ფასდაკლების ბარათი და შემდეგ იზრდება
                      ფასდაკლების % ეწვიეთ
                      <a href="#!" className="link">
                        ბმულს.{" "}
                      </a>
                    </p>
                  </div>
                  <div className="faq-block_item">
                    <div className="title">
                      აქციით დაწესებული საჩუქრები როგორ გადაეცემათ?
                    </div>
                    <p className="txt">
                      თუ არ არის გამოცხადებული კონკრეტული საჩუქარი განსაზღვრული
                      შენაძენის მიხედვით, მაშინ გაიცემა გარკვეული შიდა განაწესით
                      შენაძენის მიხედვით და საჩუქრების მარაგებით ფილიალების
                      მიხედვით. ინტერნეტმაღაზიის შემთხვევაში შეძენის
                      შემთხვევაშიც განისაზღვება ჯამური შენაძენის, ბრენდის და
                      სხვა პარამეტრების გათვალისწინებით ინდივიდუალურად.
                    </p>
                  </div>
                  <div className="faq-block_item">
                    <div className="title">
                      ინტერნეტმაღაზიაში შეძენის შემთხვევაში თუ გაქვთ შეფუთვის
                      სერვისი?
                    </div>
                    <p className="txt">
                      დიახ, შეფსაფუთად უბრალოდ მონიშნეთ ღილაკი „სასაჩუქრედ
                      შეფუთვა“ პროდუქტის ქვეშ.
                    </p>
                  </div>
                  <div className="faq-block_item">
                    <div className="title">
                      შემიძლია თუ არა არსებული ფასდაკლების ბარათის მიბმა ონლაინ
                      მაღაზიაზე?
                    </div>
                    <p className="txt">
                      დიახ, უბრალოდ უნდა შეხვიდეთ თქვენს პროფილში, შემდეგ
                      ფასდაკლების ბარათის ველში და დააჭიროთ ღილაკს „არსებული
                      ბარათის დამატება“
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
