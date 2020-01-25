import React from "react";
import { Layout } from "../../layout";
import { ProfileLeft } from "../../components/profile-left/profile-left";
import { connect } from "react-redux";
import { IUser } from "../../redux/auth/authTypes";
import { StoreState } from "../../redux/mainReducer";

interface ProfileBasePageProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
  user: IUser;
}

const _ProfileBasePage: React.FC<ProfileBasePageProps> = ({
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
const mapStateToProps = ({ auth }: StoreState) => ({
  user: auth.user as IUser
});

export const ProfileBasePage = connect(mapStateToProps)(_ProfileBasePage);
