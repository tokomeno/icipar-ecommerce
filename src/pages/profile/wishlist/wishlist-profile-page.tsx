import React from "react";
import { ProfileBasePage } from "../index";

interface WishlistProfilePageProps {}

export const WishlistProfilePage: React.FC<WishlistProfilePageProps> = props => {
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side table-profile">
        <div className="profile-top">
          <h1 className="profile-top_title">სურვილები</h1>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>პროდუქტები</th>
                <th className="text-center">ფასი</th>
                <th className="text-center">კალათა</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="first-td">
                  <a href="#!" className="d-flex align-items-center">
                    <div className="image d-flex align-items-center justify-content-center">
                      <img
                        src="uploads/images/cart-product@2x.png"
                        alt="cart"
                      />
                    </div>
                    <div>
                      <div className="name">Calvin Klein All, 100ml, Red</div>
                      <div className="profbtns d-flex">
                        <button className="profbtns_btn">წაშლა</button>
                        <button className="heart profbtns_btn cart d-block d-sm-none">
                          <img src="images/bag-r.svg" alt="favorite" />
                          <div className="qty">
                            <span className="num">0</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="price-td text-center">
                  <div className="price-block">
                    <div className="price sum">
                      110
                      <sub>D</sub>
                    </div>
                  </div>
                </td>
                <td className="text-center bag-td">
                  <div className="bag d-flex flex-column align-items-center">
                    <img src="images/bag-grey.svg" alt="cart" />
                    <img src="images/bag-r.svg" alt="cart" className="hover" />
                    <a href="#!" className="add-bag">
                      კალათაში დამატება
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination d-none d-md-flex">
            გვერდები:
            <div className="d-flex pages">
              <span className="pages-item">1</span>
              <a href="#!" className="pages-item">
                2
              </a>
              <a href="#!" className="pages-item">
                3
              </a>
              <a href="#!" className="pages-item">
                4
              </a>
              <a href="#!" className="pages-item">
                5
              </a>
              <a href="#!" className="pages-item">
                6
              </a>
            </div>
          </div>
        </div>
        <div className="shopping-bottom wishlist-btn d-flex align-items-center d-flex d-md-none justify-content-center">
          <div className="next d-flex align-items-center">
            <a href="#!" className="buy-btn">
              კალათა
              <img src="images/arrow-right.svg" alt="arrow" />
              <img
                src="images/arrow-right_r.svg"
                alt="arrow"
                className="red-arrow"
              />
            </a>
          </div>
        </div>
      </div>
      ;
    </ProfileBasePage>
  );
};
