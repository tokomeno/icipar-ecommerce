import React from "react";
import { ProfileBasePage } from "../index";

interface AddressProiflePageProps {}

export const AddressProiflePage: React.FC<AddressProiflePageProps> = props => {
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side table-profile">
        <div className="profile-top">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="profile-top_title">
                დაამატე ახალი
                <a href="#!" className="delete">
                  წაშლა
                </a>
              </h1>
            </div>
            <div className="col-sm-6">
              <h2 className="profile-top_title d-none d-sm-block">
                მისამართები
              </h2>
            </div>
          </div>
        </div>
        <form className="info">
          <div className="row">
            <div className="col-sm-6">
              <div className="dropdown info-item">
                <label>ქალაქი</label>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ქალაქი
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    თბილისი
                  </a>
                  <a className="dropdown-item" href="#">
                    ბათუმი
                  </a>
                  <a className="dropdown-item" href="#">
                    ქუთაისი
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column info-item">
                <label htmlFor="loc">მისამართი</label>
                <input type="text" id="loc" placeholder="ცინცაძის" />
              </div>
              <div className="d-flex flex-column info-item">
                <label htmlFor="com">კომენტერი</label>
                <input type="text" id="com" placeholder="კომენტერი" />
              </div>
              <div className="d-flex flex-column info-item">
                <label htmlFor="name">საკონტაქტო პირი</label>
                <input type="text" id="name" placeholder="სახელი" />
              </div>
              <div className="d-flex flex-column info-item">
                <label htmlFor="num">ტელეფონის მომერი</label>
                <input type="text" id="num" placeholder="+995 XXX XXX XXX" />
              </div>
              <div className="d-flex flex-column info-item">
                <label htmlFor="email">ელ. ფოსტა</label>
                <input
                  type="email"
                  id="email"
                  placeholder="a.toidze@gmail.com"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex flex-column info-item">
                <label htmlFor="loc">მისამართი</label>
                <textarea
                  placeholder="თბილისი, სულხან ცინცაძის 3, ბინა 9 ნინო, +995 59  500 923"
                  defaultValue={""}
                />
              </div>
              <div className="d-flex flex-column info-item">
                <label htmlFor="loc">მისამართი</label>
                <textarea
                  placeholder="თბილისი, სულხან ცინცაძის 3, ბინა 9 ნინო, +995 59  500 923"
                  defaultValue={""}
                />
              </div>
              <div className="d-flex flex-column info-item">
                <label htmlFor="loc">მისამართი</label>
                <textarea
                  placeholder="თბილისი, სულხან ცინცაძის 3, ბინა 9 ნინო, +995 59  500 923"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="info-btns d-flex justify-content-sm-start justify-content-center">
            <button className="save info-btns_btn">დამატება</button>
            <button className="cancel info-btns_btn">გაუქმება</button>
          </div>
        </form>
      </div>
      ;
    </ProfileBasePage>
  );
};
