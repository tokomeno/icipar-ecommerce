import React from "react";

interface BurgerNavProps {}

export const BurgerNav: React.FC<BurgerNavProps> = props => {
  return (
    <React.Fragment>
      <div className="burger-nav">
        <button className="burger-close">
          <img src="/assets/images/close.svg" alt="close" />
        </button>
        <div className="burger-nav_block">
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">სუნამოები</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                ყველა
              </a>
              <a href="#!" className="link">
                მამაკაცი
              </a>
              <a href="#!" className="link">
                ქალი
              </a>
              <a href="#!" className="link">
                სიახლე
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">კანის მოვლა</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                კანის მოვლა
              </a>
              <a href="#!" className="link">
                კანის მოვლა
              </a>
              <a href="#!" className="link">
                კანის მოვლა
              </a>
              <a href="#!" className="link">
                კანის მოვლა
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">თმის მოვლა</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                თმის მოვლა
              </a>
              <a href="#!" className="link">
                თმის მოვლა
              </a>
              <a href="#!" className="link">
                თმის მოვლა
              </a>
              <a href="#!" className="link">
                თმის მოვლა
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">მაკიაჟი</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                მაკიაჟი
              </a>
              <a href="#!" className="link">
                მაკიაჟი
              </a>
              <a href="#!" className="link">
                მაკიაჟი
              </a>
              <a href="#!" className="link">
                მაკიაჟი
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">ფრჩხილის მოვლა</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                ფრჩხილის მოვლა
              </a>
              <a href="#!" className="link">
                ფრჩხილის მოვლა
              </a>
              <a href="#!" className="link">
                ფრჩხილის მოვლა
              </a>
              <a href="#!" className="link">
                ფრჩხილის მოვლა
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">პარაფარმაცაია</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                პარაფარმაცაია
              </a>
              <a href="#!" className="link">
                პარაფარმაცაია
              </a>
              <a href="#!" className="link">
                პარაფარმაცაია
              </a>
              <a href="#!" className="link">
                პარაფარმაცაია
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">ფასდაკლება</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                ფასდაკლება
              </a>
              <a href="#!" className="link">
                ფასდაკლება
              </a>
              <a href="#!" className="link">
                ფასდაკლება
              </a>
              <a href="#!" className="link">
                ფასდაკლება
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">სიახლე</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                სიახლე
              </a>
              <a href="#!" className="link">
                სიახლე
              </a>
              <a href="#!" className="link">
                სიახლე
              </a>
              <a href="#!" className="link">
                სიახლე
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">ბრენდები</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                ბრენდები
              </a>
              <a href="#!" className="link">
                ბრენდები
              </a>
              <a href="#!" className="link">
                ბრენდები
              </a>
              <a href="#!" className="link">
                ბრენდები
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">სასაჩუქრე ბარათი</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                სასაჩუქრე ბარათი
              </a>
              <a href="#!" className="link">
                სასაჩუქრე ბარათი
              </a>
              <a href="#!" className="link">
                სასაჩუქრე ბარათი
              </a>
              <a href="#!" className="link">
                სასაჩუქრე ბარათი
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">ნაკრებები</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                ნაკრებები
              </a>
              <a href="#!" className="link">
                ნაკრებები
              </a>
              <a href="#!" className="link">
                ნაკრებები
              </a>
              <a href="#!" className="link">
                ნაკრებები
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div className="burgermenu-title d-flex align-items-center justify-content-between">
              <div className="title">ბლოგი</div>
              <i className="fa fa-chevron-down" />
              <i className="fa fa-chevron-up" />
            </div>
            <div className="menu-item_inner">
              <a href="#!" className="link">
                ბლოგი
              </a>
              <a href="#!" className="link">
                ბლოგი
              </a>
              <a href="#!" className="link">
                ბლოგი
              </a>
              <a href="#!" className="link">
                ბლოგი
              </a>
            </div>
          </div>
          <a href="#!" className="burger-sub_link">
            ჩვენს შესახებ
          </a>
          <a href="#!" className="burger-sub_link">
            კონტაქტი
          </a>
          <a href="#!" className="burger-sub_link">
            მაღაზიები
          </a>
          <a href="#!" className="burger-sub_link">
            როგორ მუშაობს
          </a>
          <a href="#!" className="burger-sub_link">
            FAQ
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
