import React from "react";

interface ReveiwProps {}

export const Reveiw: React.FC<ReveiwProps> = props => {
  return (
    <React.Fragment>
      <div className="line-sliders d-none d-sm-block" />
      <div className="review-content">
        <div className="top d-sm-flex d-none flex-column align-items-center">
          <h3 className="title">განხილვები</h3>
          <div className="d-flex align-items-center">
            <div className="rate">
              <i className="fa fa-star checked" />
              <i className="fa fa-star checked" />
              <i className="fa fa-star checked" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="num">
              (<span>87</span> განხილვა)
            </div>
          </div>
        </div>
        <div className="review-block">
          <div className="container">
            <div className="reviews-list">
              <div className="review-block_item">
                <div className="rate">
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                </div>
                <h4 className="title">საუკეთესო სერვისი თბილისში</h4>
                <h5 className="user">anatoidze</h5>
                <p className="txt">
                  ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                  ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად
                  აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების
                  სურნელებათა თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო
                  განკუთვნილია როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
                </p>
              </div>
              <div className="review-block_item">
                <div className="rate">
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                </div>
                <h4 className="title">ძალიან კარგი პერსონალი გყავთ ^^</h4>
                <h5 className="user">anatoidze</h5>
                <p className="txt">
                  წერეთელის ფილიალში გყავთ ძალიან ყურადღებიანი და საყვარელი
                  კონსულტანტები. &lt;3 &lt;3 საუკეთესო ფილიალია.
                </p>
              </div>
              <div className="review-block_item">
                <div className="rate">
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                </div>
                <h4 className="title">საუკეთესო სერვისი თბილისში</h4>
                <h5 className="user">anatoidze</h5>
                <p className="txt">
                  ეს არის სინათლისა და სიცოცხლის სურნელი - კეთილშობილი და
                  ბრწყინვალე!მის ხილოვან და მერქნისებურ სურნელს თანაბრად
                  აფასებენ ქალებიც და მამაკაცებიც. ეს სუნამო აგრძელებს ბაღების
                  სურნელებათა თემას, რომელიც 2003 წლიდან იღებს სათავეს… სუნამო
                  განკუთვნილია როგორც ქალბატონებისთვის, ასევე მამაკაცებისთვის.
                </p>
              </div>
            </div>
            <div className="pagination">
              გვერდები:
              <div className="pages">
                <span className="pages-link">1</span>
                <a href="#!" className="pages-link">
                  2
                </a>
                <a href="#!" className="pages-link">
                  3
                </a>
                <a href="#!" className="pages-link">
                  4
                </a>
                <a href="#!" className="pages-link">
                  5
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
