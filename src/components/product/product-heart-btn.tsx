import React from "react";
import classnames from "classnames";
import { IStoreState } from "../../redux/mainReducer";
import { connect } from "react-redux";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { toggleFavorite } from "../../redux/favorites/favoritesActions";
import { useTranslation } from "react-i18next";

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
  if (!isAuth)
    return (
      <NotLoginHeart extraClassname={extraClassname} children={children} />
    );
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

const NotLoginHeart: React.FC<{ extraClassname?: string }> = ({
  extraClassname,
  children
}) => {
  const { t } = useTranslation();
  return (
    <OverlayTrigger
      trigger={["focus", "hover"]}
      overlay={<Tooltip id={`tooltip-top`}>{t("please_sign_in")}</Tooltip>}
    >
      <button className={classnames("heart", extraClassname)}>
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
    </OverlayTrigger>
  );
};
