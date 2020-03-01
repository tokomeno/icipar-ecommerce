import React, { useContext } from "react";
import {
  IActiveModalContext,
  ActiveModalContext
} from "../../../contexts/modalContex";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IOrder, OrderService } from "../../../services/order.http";
import { useInput } from "../../../hooks/common/useInput";
import { useErrors } from "../../../hooks/common/useErrors";

interface OrderComplaintModalProps {
  order: IOrder;
}

export const OrderComplaintModal: React.FC<OrderComplaintModalProps> = ({
  order
}) => {
  const { hideModal, activeModal } = useContext<IActiveModalContext>(
    ActiveModalContext
  );
  const { errors, setErrors } = useErrors<{
    complaint?: string[];
  }>({});

  const inputHandler = useInput("");
  const handleSubmit = () => {
    OrderService.complaint({
      complaint: inputHandler.value,
      order_id: order.id
    })
      .then(res => hideModal())
      .catch(err => {
        if (err.response.data) {
          setErrors(err.response.data);
        }
      });
  };

  const { t } = useTranslation();
  return (
    <>
      <Modal
        className="evaluation-modal"
        centered
        show={activeModal === "order-complaint"}
        onHide={hideModal}
      >
        <button type="button" className="close" onClick={hideModal}>
          <span aria-hidden="true">×</span>
        </button>

        <div className="title">{t("complaint")}</div>
        <div className="line" />
        <form className="d-flex flex-column">
          {/* <label>{t("complaint_reason")}</label> */}
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle d-flex align-items-center justify-content-between"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              აირჩიე
              <i className="fas fa-chevron-down down" />
              <i className="fas fa-chevron-up up" />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                მიზეზი
              </a>
              <a className="dropdown-item" href="#">
                მიზეზი1
              </a>
              <a className="dropdown-item" href="#">
                მიზეზი2
              </a>
            </div>
          </div> */}
          <label htmlFor="details">{t("share_your_mind")}</label>
          <textarea
            className="mb-10"
            {...inputHandler}
            id="details"
            placeholder={t("please_explain_reason_in_details")}
          />
          {errors.complaint && Array.isArray(errors.complaint) && (
            <p className="text-danger">{errors.complaint.join(" ")}</p>
          )}
          <div className="d-flex">
            <button type="button" onClick={handleSubmit} className="send btn">
              {t("submit")}
            </button>
            <button type="button" onClick={hideModal} className="cancel btn">
              {t("cancel")}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
