import React from "react";
import { ProfileBasePage } from "../index";

interface CouponsPageProps {}

export const CouponsPage: React.FC<CouponsPageProps> = props => {
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side couples-table">
        <div className="profile-top">
          <h1 className="profile-top_title">კუპონები</h1>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>კოდი</th>
                <th>ფასდაკლება ვრცელდება</th>
                <th className="text-center">ფასდაკლება</th>
                <th className="text-right">დარჩენილია</th>
              </tr>
            </thead>
            <tbody>
              <tr className="coupons-tr ">
                <td>
                  <div className="code">KBF23KK12#</div>
                </td>
                <td>
                  <div className="sale-item code">
                    Dior, Tom Ford Dior, Tom Ford Dior, Tom Ford Dior, Tom Ford
                    Dior, Tom Ford
                  </div>
                </td>
                <td className="text-center">
                  <div className="sale-num">15%</div>
                </td>
                <td className="text-right">
                  <div className="days">2 დღე, 23:12:59</div>
                </td>
              </tr>
              <tr className="coupons-tr ">
                <td>
                  <div className="code">KBF23KK12#</div>
                </td>
                <td>
                  <div className="sale-item code">Dior, Tom Ford</div>
                </td>
                <td className="text-center">
                  <div className="sale-num">15%</div>
                </td>
                <td className="text-right">
                  <div className="days">2 დღე, 23:12:59</div>
                </td>
              </tr>
              <tr className="coupons-tr used">
                <td>
                  <div className="code">KBF23KK12#</div>
                </td>
                <td>
                  <div className="sale-item code">Dior, Tom Ford</div>
                </td>
                <td className="text-center">
                  <div className="sale-num">15%</div>
                </td>
                <td className="text-right">
                  <div className="days used-txt">გამოყენებული</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProfileBasePage>
  );
};
