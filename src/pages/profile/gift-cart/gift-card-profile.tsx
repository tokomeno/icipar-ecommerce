import React from "react";
import { ProfileBasePage } from "../index";

interface GiftCardProfilePageProps {}

export const GiftCardProfilePage: React.FC<GiftCardProfilePageProps> = props => {
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side couples-table">
        <div className="profile-top">
          <h1 className="profile-top_title">სასაჩუქრე ბარათები</h1>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>კოდი</th>
                <th>ვრცელდება</th>
                <th className="text-center">თანხა</th>
                <th className="text-right">სტატუსი</th>
              </tr>
            </thead>
            <tbody>
              <tr className="coupons-tr ">
                <td>
                  <div className="code">KBF23KK12#</div>
                </td>
                <td>
                  <div className="sale-item code">სრულ პროდუქციაზე</div>
                </td>
                <td className="text-center">
                  <div className="gift-price">
                    <span>200</span>GEL
                  </div>
                </td>
                <td className="text-right">
                  <div className="status">აქტიური</div>
                </td>
              </tr>
              <tr className="coupons-tr ">
                <td>
                  <div className="code">KBF23KK12#</div>
                </td>
                <td>
                  <div className="sale-item code">სრულ პროდუქციაზე</div>
                </td>
                <td className="text-center">
                  <div className="gift-price">
                    <span>50</span>GEL
                  </div>
                </td>
                <td className="text-right">
                  <div className="status">აქტიური</div>
                </td>
              </tr>
              <tr className="coupons-tr used">
                <td>
                  <div className="code">KBF23KK12#</div>
                </td>
                <td>
                  <div className="sale-item code">სრულ პროდუქციაზე</div>
                </td>
                <td className="text-center">
                  <div className="gift-price">
                    <span>5.95</span>GEL
                  </div>
                </td>
                <td className="text-right">
                  <div className="status">გამოყენებული</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProfileBasePage>
  );
};
