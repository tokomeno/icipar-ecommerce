import React, { useEffect, useState } from "react";
import { ProfileBasePage } from "../index";
import { connect } from "react-redux";
import { IStoreState } from "../../../redux/mainReducer";
import { CartCheckoutForm } from "./cart-checkout-form";
import { useToggle } from "../../../hooks/common/useToggle";
import { CartContent } from "./cart-content";
import { CustomerService, ICustomer } from "../../../services/customer.http";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";

interface CartPageProps {
  totalPrice: number;
}

const _CartPage: React.FC<CartPageProps> = ({ totalPrice }) => {
  const {
    isActive: FirstStep,
    setActive: showContent,
    setInActive: goToCheckout
  } = useToggle(false);
  const [customer, setCustomer] = useState<ICustomer | null>(null);

  useEffect(() => {
    CustomerService.getCustomer().then(res => setCustomer(res.data.data));
  }, []);

  if (!customer) return <ProfileSpinner />;

  return (
    <ProfileBasePage>
      <div className="checkout-cont">
        {FirstStep && <CartContent goToCheckout={goToCheckout} />}
        {!FirstStep && (
          <CartCheckoutForm
            customer={customer}
            showContent={showContent}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </ProfileBasePage>
  );
};
const mapStateToProps = ({ cart }: IStoreState) => {
  return {
    totalPrice: cart.totalPrice
  };
};

export const CartPage = connect(mapStateToProps)(_CartPage);
