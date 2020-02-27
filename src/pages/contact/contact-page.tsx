import React from "react";

import { PageSideMenu } from "../../components/pageSideMenu";

interface ContactPageProps {}

export const ContactPage: React.FC<ContactPageProps> = props => {
  return (
    <>
      <div className="container">
        <div className="about row">
          <PageSideMenu />
          <div className="col-lg-9">
            <div className="right">
              <div className="top">
                <h1 className="title">კონტაქტი</h1>
              </div>
              <div className="desc">
                <div className="contact row">
                  <div className="col-md-6">
                    <form>
                      <label htmlFor="name">სახელი</label>
                      <input type="text" id="name" placeholder="დაიწყე წერა" />
                      <label htmlFor="email">ელ. ფოსტა</label>
                      <input type="text" id="email" placeholder="დაიწყე წერა" />
                      <label htmlFor="mobile">ტელეფონი</label>
                      <input
                        type="text"
                        id="mobile"
                        placeholder="დაიწყე წერა"
                      />
                      <label htmlFor="text">ტექსტი</label>
                      <textarea id="text" defaultValue={"დაიწყე წერა…"} />
                      <div className="d-flex btns">
                        <button className="send btn">გამოქვეყნება</button>
                        <button className="cancel btn">გაუქმება</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 d-flex align-items-center flex-column">
                    <a href="tel:+995322201717" className="contact-btn d-flex">
                      <img src="images/contact-btn.svg" alt="" />+ 995 32 2 20
                      17 17
                    </a>
                    <a
                      href="mailto:info@prestige.ge "
                      className="contact-btn d-flex"
                    >
                      <img src="images/email.svg" alt="" />
                      info@prestige.ge
                    </a>
                    <div className="soc d-flex">
                      <a
                        href="#!"
                        className="soc-item d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="#!"
                        className="soc-item d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        href="#!"
                        className="soc-item d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
