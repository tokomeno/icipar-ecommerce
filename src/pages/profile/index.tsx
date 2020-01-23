import React from "react";
import { Layout } from "../../layout";
import { ProfileLeft } from "../../components/profile-left/profile-left";

interface ProfileBasePageProps {
  modal?: React.ReactNode;
}

export const ProfileBasePage: React.FC<ProfileBasePageProps> = ({
  children,
  modal
}) => {
  return (
    <Layout>
      {modal}
      <div className="container">
        <div className="profile shoppingCart">
          <div className="d-flex">
            <ProfileLeft />
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};
