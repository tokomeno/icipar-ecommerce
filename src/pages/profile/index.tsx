import React from "react";
import { Layout } from "../../layout";
import { ProfileLeft } from "../../components/profile-left/profile-left";
import { connect } from "react-redux";
import { IUser } from "../../redux/auth/authTypes";
import { logoutUser } from "../../redux/auth/authActions";
import { IStoreState } from "../../redux/mainReducer";

interface ProfileBasePageProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
  user: IUser;
  logoutUser: typeof logoutUser;
}

const _ProfileBasePage: React.FC<ProfileBasePageProps> = ({
  children,
  modal,
  logoutUser
}) => {
  return (
    <Layout>
      {modal}
      <div className="container">
        <div className="profile shoppingCart">
          <div className="d-flex">
            <ProfileLeft logout={logoutUser} />
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = ({ auth }: IStoreState) => ({
  user: auth.user as IUser
});

export const ProfileBasePage = connect(mapStateToProps, { logoutUser })(
  _ProfileBasePage
);
