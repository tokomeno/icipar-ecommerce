import React from "react";
import { ProductShowSlider } from "./product-show-slider";
import { IProductWithItems } from "../../data/product";
import classnames from "classnames";
import { AddCartButton } from "./AddCartButton";
import { useTranslation } from "react-i18next";
import { Rating } from "../../components/rating";

interface ItemProps {
  product: IProductWithItems;
  setActiveItemFromId: (id: number) => void;
  activeItem: IProductWithItems["items"][number];
}

export const Item: React.FC<ItemProps> = ({
  product,
  setActiveItemFromId,
  activeItem
}) => {
  const { t } = useTranslation();
  return (
    <div className="product-desc">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            {/* <div className="prod-tags d-none d-md-flex align-items-center">
              <a href="#!" className="prod-tags_link">
                SUMMER 2013 (1,400)
              </a>
              <a href="#!" className="prod-tags_link">
                WINTER 2013 (500)
              </a>
              <a href="#!" className="prod-tags_link">
                BAST CARE (13)
              </a>
            </div> */}
            <ProductShowSlider activeItem={activeItem} />
          </div>
          <div className="col-md-7">
            <div className="description">
              <div className="social">
                <a
                  href="#!"
                  className="fb social-item d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="#!"
                  className="tw social-item d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="#!"
                  className="p social-item d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-pinterest" />
                </a>
              </div>
              <div className="d-flex align-items-center">
                <Rating rating={product.rating} />
                <div className="review">
                  (<span>87</span> {t("ganxilva")})
                </div>
              </div>
              <div className="d-flex name-block">
                <h1 className="name">{activeItem.title}</h1>
                <button className="heart profbtns_btn">
                  <img
                    src="/assets/images/heart-border.svg"
                    alt="favorite"
                    className="favorite"
                  />
                  <img
                    src="/assets/images/loved.svg"
                    alt="favorite"
                    className="added favorite"
                  />
                </button>
              </div>
              <div className="full-name">{product.brand.name}</div>
              <div className="sizes d-flex align-items-xl-center flex-xl-row flex-column align-items-start">
                <Items
                  activeItem={activeItem}
                  items={product.items}
                  setActiveItemFromId={setActiveItemFromId}
                />
                <div className="qty">
                  ({t("maragshia_erteuli", { number: activeItem.stock })})
                </div>
              </div>
              <AddCartButton activeItem={activeItem} />
              <div className="d-lg-flex d-none">
                <a href="#!" className="deliv d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <img src="/assets/images/deliv.svg" alt="delivery" />
                  </div>
                  <div className="txt">{t("Delivery_Conditions")}</div>
                </a>
                <a href="#!" className="deliv d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <img
                      src="/assets/images/location.svg"
                      alt="delivery"
                      className="loc-icon"
                    />
                  </div>
                  <div className="txt">{t("In_which_branch")}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ItemsProps {
  items: IProductWithItems["items"];
  setActiveItemFromId: (id: number) => void;
  activeItem: IProductWithItems["items"][number];
}

export const Items: React.FC<ItemsProps> = React.memo(
  ({ items, activeItem, setActiveItemFromId }) => {
    return (
      <div className="d-flex">
        {items.map(item => (
          <a
            href="#!"
            className={classnames("sizes-item d-flex align-items-center", {
              active: activeItem.id === item.id
            })}
            onClick={() => {
              setActiveItemFromId(item.id);
            }}
            key={item.id}
          >
            <img src={item.thumbnail} alt={item.title} />
            <div className="txt">{item.volume} მლ.</div>
            {/* <div className="hover">წონა: 0.3 კგ.</div> */}
          </a>
        ))}
      </div>
    );
  }
);
