import React from "react";
import classnames from "classnames";
import { IStoreState } from "../../redux/mainReducer";
import { connect } from "react-redux";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { toggleFavorite } from "../../redux/favorites/favoritesActions";

interface ProductHeartBtnProps {
  productId: number;
  isAuth: boolean;
  toogleFavorite: typeof toggleFavorite;
  isActive: boolean;
  loadingId: number | null;
  extraClassname?: string;
  children?: JSX.Element;
}

const _ProductHeartBtn: React.FC<ProductHeartBtnProps> = ({
  productId,
  isAuth,
  toogleFavorite,
  isActive,
  loadingId,
  extraClassname,
  children
}) => {
  if (!isAuth) return <NotLoginHeart />;
  return (
    <button
      onClick={() => {
        if (isAuth && loadingId !== productId) toogleFavorite(productId);
      }}
      disabled={productId === loadingId}
      className={classnames("heart disableOpacity", extraClassname, {
        active: isActive
      })}
    >
      {children ? (
        children
      ) : (
        <>
          <img src="/assets/images/heart-dark.svg" alt="favorite" />
          <img
            src="/assets/images/loved.svg"
            alt="favorite"
            className="added"
          />
        </>
      )}
    </button>
  );
};

const mapStateToProps = (
  { auth, favorites }: IStoreState,
  ownProps: Omit<
    ProductHeartBtnProps,
    "isAuth" | "toogleFavorite" | "loadingId" | "isActive" | "children"
  >
) => {
  return {
    isAuth: !!auth.token,
    isActive:
      favorites.itemsByKeys && !!favorites.itemsByKeys[ownProps.productId],
    loadingId: favorites.loadingId
  };
};

export const ProductHeartBtn = connect(mapStateToProps, {
  toogleFavorite: toggleFavorite
})(_ProductHeartBtn);

const NotLoginHeart: React.FC = () => {
  return (
    <OverlayTrigger
      trigger="hover"
      overlay={<Tooltip id={`tooltip-top`}>Please Sign In</Tooltip>}
    >
      <button className={classnames("heart")}>
        <img src="/assets/images/heart-dark.svg" alt="favorite" />
        <img src="/assets/images/loved.svg" alt="favorite" className="added" />
      </button>
    </OverlayTrigger>
  );
};
