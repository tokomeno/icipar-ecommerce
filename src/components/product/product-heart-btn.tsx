import React from "react";
import classnames from "classnames";
import { useToggle } from "../../hooks/common/useToggle";
import { IStoreState } from "../../redux/mainReducer";
import { connect } from "react-redux";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

interface ProductHeartBtnProps {
  productId: number;
  isAuth: boolean;
}

const _ProductHeartBtn: React.FC<ProductHeartBtnProps> = ({
  productId,
  isAuth
}) => {
  const { toggle, isActive } = useToggle(false);
  if (!isAuth) {
    return (
      <OverlayTrigger
        trigger="hover"
        overlay={<Tooltip id={`tooltip-top`}>Please Sign In</Tooltip>}
      >
        <button className={classnames("heart")}>
          <img src="/assets/images/heart-dark.svg" alt="favorite" />
          <img
            src="/assets/images/loved.svg"
            alt="favorite"
            className="added"
          />
        </button>
      </OverlayTrigger>
    );
  }
  return (
    <button
      onClick={() => {
        if (isAuth) toggle();
      }}
      className={classnames("heart", { active: isActive })}
    >
      <img src="/assets/images/heart-dark.svg" alt="favorite" />
      <img src="/assets/images/loved.svg" alt="favorite" className="added" />
    </button>
  );
};

const mapStateToProps = ({ auth }: IStoreState) => {
  return {
    isAuth: !!auth.token
  };
};

export const ProductHeartBtn = connect(mapStateToProps)(_ProductHeartBtn);
