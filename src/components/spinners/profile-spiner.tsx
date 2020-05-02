import React from "react";
import { ProfileBasePage } from "../../pages/profile";

import { BounceLoader } from "react-spinners";

interface ProfileSpinnerProps {}

export const ProfileSpinner: React.FC<ProfileSpinnerProps> = () => {
  return (
    <ProfileBasePage>
      <div className="checkout-cont">
        <div
          className="container"
          style={{
            minHeight: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BounceLoader size={40} color={"#fa7268"} loading={true} />
        </div>
      </div>
    </ProfileBasePage>
  );
};
