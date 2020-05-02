import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductService, IProductReview } from "../../services/product.http";
import { Rating } from "../rating";

interface ReveiwProps {
  product_id: number;
}

export const Reviews: React.FC<ReveiwProps> = ({ product_id }) => {
  const [reviews, setReviews] = useState<IProductReview[]>([]);

  useEffect(() => {
    ProductService.getProductReviews(product_id).then((res) =>
      setReviews(res.data.data)
    );
  }, [setReviews, product_id]);
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="review-content">
        <div className="top d-sm-flex d-none flex-column align-items-center">
          <h3 className="title">{t("reviews")}</h3>
          <div className="d-flex align-items-center">
            {/* <div className="rate">
              <i className="fa fa-star checked" />
              <i className="fa fa-star checked" />
              <i className="fa fa-star checked" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div> */}
            <div className="num">
              (<span>{reviews.length}</span> განხილვა)
            </div>
          </div>
        </div>
        <div className="review-block">
          <div className="container">
            <div className="reviews-list">
              {reviews.map((review) => (
                <div className="review-block_item">
                  <Rating ratable={false} rating={review.rate} />
                  <h4 className="title">{review.title}</h4>
                  <h5 className="user">{review.user_name}</h5>
                  <p className="txt">{review.comment}</p>
                </div>
              ))}
            </div>
            {/* <div className="pagination">
              {t("pages")}:
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
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
