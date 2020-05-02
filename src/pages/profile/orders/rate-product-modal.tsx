import React, { useContext, useState } from "react";
import {
  IActiveModalContext,
  ActiveModalContext,
} from "../../../contexts/modalContex";
import { Modal } from "react-bootstrap";
import { Rating } from "../../../components/rating";
import { useTranslation } from "react-i18next";
import { IOrder } from "../../../services/order.http";
import { useInput } from "../../../hooks/common/useInput";
import { ProductService } from "../../../services/product.http";

interface RateProductModalProps {
  item: IOrder["items"][number];
}

export const RateProductModal: React.FC<RateProductModalProps> = ({ item }) => {
  const { hideModal, activeModal } = useContext<IActiveModalContext>(
    ActiveModalContext
  );
  const { t } = useTranslation();
  const textInputHandler = useInput();
  const [rate, setRate] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ comment?: string[]; rate?: string[] }>(
    {}
  );

  const handleSubmit = () => {
    ProductService.reviewProduct({
      product_id: item.product_id,
      comment: textInputHandler.value,
      rate: rate as number,
    })
      .then((res) => {
        hideModal();
      })
      .catch((err) => {
        if (err.response.data) {
          setErrors(err.response.data);
        } else {
          console.error(err);
        }
      });
  };
  return (
    <Modal
      className="evaluation-modal"
      centered
      show={activeModal === "rate-product"}
      onHide={hideModal}
    >
      <button type="button" className="close" onClick={hideModal}>
        <span aria-hidden="true">×</span>
      </button>

      <div className="title">{t("rate")}</div>
      <Rating ratable={true} onRateChange={(r) => setRate(r)} />
      {errors.rate && <p className="text-danger">{errors.rate}</p>}
      <div className="line" />
      <form className="d-flex flex-column">
        <label htmlFor="idea">{t("share_your_mind")}</label>
        <textarea {...textInputHandler} id="idea" />
        {errors.comment && <p className="text-danger">{errors.comment}</p>}
        <div className="d-flex">
          <button onClick={handleSubmit} type="button" className="send btn">
            {t("submit")}
          </button>
          <button type="button" onClick={hideModal} className="cancel btn">
            {t("cancel")}
          </button>
        </div>
      </form>
    </Modal>
  );
};
