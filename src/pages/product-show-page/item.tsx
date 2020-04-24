import React from "react";
import { ProductShowSlider } from "./product-show-slider";
import classnames from "classnames";
import { AddCartButton } from "./add-cart-button";
import { useTranslation } from "react-i18next";
import { Rating } from "../../components/rating";
import { Dropdown } from "react-bootstrap";
import { IProductWithItems } from "../../services/product.http";
import { ProductHeartBtn } from "../../components/product/product-heart-btn";
import { FacebookShareButton, TwitterShareButton } from "react-share";

interface ItemProps {
  product: IProductWithItems;
  setActiveItemFromId: (id: number) => void;
  activeItem: IProductWithItems["items"][number];
  branches: { full_address: string }[];
  delivery_terms: string;
  hot_timer?: JSX.Element;
}

export const Item: React.FC<ItemProps> = ({
  product,
  setActiveItemFromId,
  activeItem,
  branches,
  delivery_terms,
  hot_timer,
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
              <Social />
              <div className="d-flex align-items-center">
                <Rating rating={product.rating} />
                {/* <div className="review">
                  (<span>87</span> {t("ganxilva")})
                </div> */}
              </div>

              <div
                className={classnames("d-flex name-block", {
                  "align-items-lg-center align-items-start flex-lg-row flex-column-reverse": !!hot_timer,
                })}
              >
                <h1 className="name">{activeItem.title}</h1>
                {hot_timer ? (
                  hot_timer
                ) : (
                  <ProductHeartBtn
                    extraClassname="profbtns_btn"
                    productId={product.id}
                  >
                    <>
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
                    </>
                  </ProductHeartBtn>
                )}
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

              {product.being_sold_online && (
                <AddCartButton
                  being_sold_online={product.being_sold_online}
                  activeItem={activeItem}
                />
              )}

              <div className="d-lg-flex d-none">
                <Dropdown drop="down">
                  <Dropdown.Toggle
                    drop="down"
                    as={CustomToggle}
                    id="dropdown-custom-components"
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <img src="/assets/images/deliv.svg" alt="delivery" />
                    </div>
                    <div className="txt">{t("Delivery_Conditions")}</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <p style={{ whiteSpace: "normal" }}>{delivery_terms}</p>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/images/location.svg"
                        alt="delivery"
                        className="loc-icon"
                      />
                    </div>
                    <div className="txt">{t("In_which_branch")}</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {branches.map((b) => (
                      <Dropdown.Item key={b.full_address}>
                        {b.full_address}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
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
    const { t } = useTranslation();
    return (
      <div className="d-flex">
        {items.map((item) => (
          <a
            href="#!"
            className={classnames("sizes-item d-flex align-items-center", {
              active: activeItem.id === item.id,
            })}
            onClick={() => {
              setActiveItemFromId(item.id);
            }}
            key={item.id}
          >
            <img
              style={{ maxHeight: "100%", maxWidth: "100%", width: "auto" }}
              src={item.thumbnail}
              alt={item.title}
            />
            <div className="txt">
              {item.volume} {t("ml")}
            </div>
            {/* <div className="hover">წონა: 0.3 კგ.</div> */}
          </a>
        ))}
      </div>
    );
  }
);

// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef<any, any>(
  ({ children, onClick }, ref) => (
    <a
      href="#!"
      className="deliv d-flex"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  )
);

const Social = () => (
  <div className="social">
    <FacebookShareButton
      className="fb social-item d-flex align-items-center justify-content-center"
      url={window.location.href}
    >
      <a
        href="#!"
        className="fb social-item d-flex align-items-center justify-content-center"
      >
        <i className="fab fa-facebook-f" />
      </a>
    </FacebookShareButton>

    <TwitterShareButton
      className="tw social-item d-flex align-items-center justify-content-center"
      url={window.location.href}
    >
      <a
        href="#!"
        className="tw social-item d-flex align-items-center justify-content-center"
      >
        <i className="fab fa-twitter" />
      </a>
    </TwitterShareButton>

    {/* <a
      href="#!"
      className="p social-item d-flex align-items-center justify-content-center"
    >
      <i className="fab fa-pinterest" />
    </a> */}
  </div>
);
