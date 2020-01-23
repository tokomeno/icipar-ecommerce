import React from "react";
import { ProfileBasePage } from "./index";

interface ProfilePageProps {}

export const ProfilePage: React.FC<ProfilePageProps> = props => {
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side d-lg-block d-none">
        <div className="hello text-center">
          გამარჯობა <span className="name">ქრისტინე</span>
        </div>
        <div className="prof-grid d-flex justify-content-between">
          <a
            href="#!"
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="uploads/images/profgrid1.png"
              alt="bestsellers"
              className="grid-image"
            />
            <h2 className="title">ბესტსელერები</h2>
            <img
              src="images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </a>
          <a
            href="#!"
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="uploads/images/profgrid2.png"
              alt="news"
              className="grid-image"
            />
            <h2 className="title">სიახლეები</h2>
            <img
              src="images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </a>
          <a
            href="#!"
            className="prof-grid_item d-flex align-items-center justify-content-center"
          >
            <img
              src="uploads/images/profgrid3.png"
              alt="blog"
              className="grid-image"
            />
            <h2 className="title">ბლოგი</h2>
            <img
              src="images/arrow-right.svg"
              alt="right arrow"
              className="arrow"
            />
          </a>
        </div>
        <div className="recomend-title text-center">რეკომენდაციები შენთვის</div>
        <div className="line" />
        <div className="menu d-flex justify-content-center align-items-center">
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
        <div>
          <div className="products d-flex flex-wrap">
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider1.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider2.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider3.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider1.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider2.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider3.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider1.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider2.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider3.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider1.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider2.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <a href="#!" className="img">
                  <img src="uploads/images/slider3.png" alt="photo1" />
                </a>
                <div className="option d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="rating">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="rateNum">(123)</span>
                  </div>
                  <div className="d-flex">
                    <button className="heart">
                      <img src="images/heart-dark.svg" alt="favorite" />
                      <img
                        src="images/loved.svg"
                        alt="favorite"
                        className="added"
                      />
                    </button>
                    <button className="cart">
                      <img src="images/bag-dark.svg" alt="cart" />
                      <div className="qty">
                        <span className="num">0</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#!" className="news_link">
                Calvin Klein All, 100ml
              </a>
              <div className="price">
                110
                <sub>D</sub>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </ProfileBasePage>
  );
};
