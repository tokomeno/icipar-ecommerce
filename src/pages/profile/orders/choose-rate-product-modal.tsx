import React, { useContext, useState } from "react";
import {
  IActiveModalContext,
  ActiveModalContext,
} from "../../../contexts/modalContex";
import { Modal } from "react-bootstrap";
import { Rating } from "../../../components/rating";
import { useTranslation } from "react-i18next";
import { IOrder } from "../../../services/order.http";
import { RateProductModal } from "./rate-product-modal";

interface ChooseRateProductModalProps {
  order: IOrder;
}

export const ChooseRateProductModal: React.FC<ChooseRateProductModalProps> = ({
  order: { items },
}) => {
  const { hideModal, activeModal, setActiveModal } = useContext<
    IActiveModalContext
  >(ActiveModalContext);
  const [rateProduct, setRateProduct] = useState<
    IOrder["items"][number] | null
  >(null);

  const moveToRateProductModal = (item: IOrder["items"][number]) => {
    setRateProduct(item);
    setActiveModal("rate-product");
  };
  const { t } = useTranslation();
  return (
    <>
      <Modal
        className="evaluation-modal"
        centered
        show={activeModal === "choose-rate-product"}
        onHide={hideModal}
      >
        <button type="button" className="close" onClick={hideModal}>
          <span aria-hidden="true">×</span>
        </button>
        <div className="title text-center">
          {t("choose_product")}
          <br />
          {t("which_one_you_want_to_rate")}
        </div>
        <div className="line" />
        <div className="choose-block">
          {items.map((item) => (
            <div
              key={item.id}
              className="choose-block_item d-flex align-items-sm-start align-items-start justify-content-between"
            >
              <div className="d-flex align-items-center">
                <div className="image d-flex align-items-center justify-content-center">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="txt-block">
                  <Rating rating={5} />
                  <div className="txt">{item.title}</div>
                </div>
              </div>
              <a
                href="#!"
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  moveToRateProductModal(item);
                }}
              >
                {t("rate")}
              </a>
            </div>
          ))}
        </div>
      </Modal>
      {rateProduct && <RateProductModal item={rateProduct} />}
    </>
  );
};
