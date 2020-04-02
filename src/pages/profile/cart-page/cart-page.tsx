import React, { useEffect, useState } from "react";
import { ProfileBasePage } from "../index";
import { connect } from "react-redux";
import { IStoreState } from "../../../redux/mainReducer";
import { CartCheckoutForm } from "./cart-checkout-form";
import { useToggle } from "../../../hooks/common/useToggle";
import { CartContent } from "./cart-content";
import { CustomerService, ICustomer } from "../../../services/customer.http";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";
import { AddressService, ICity } from "../../../services/address.http";

interface CartPageProps {
  totalPrice: number;
}

const _CartPage: React.FC<CartPageProps> = ({ totalPrice }) => {
  const {
    isActive: FirstStep,
    setActive: showContent,
    setInActive: goToCheckout
  } = useToggle(true);

  const [customer, setCustomer] = useState<Partial<ICustomer>>({});
  const [cities, setCities] = useState<ICity[] | null>(null);

  useEffect(() => {
    CustomerService.getCustomer()
      .then(res => setCustomer(res.data.data))
      .catch(err => {});
    AddressService.getCities().then(res => setCities(res.data.data));
  }, []);

  if (!customer || !cities) return <ProfileSpinner />;

  return (
    <ProfileBasePage>
      <div className="checkout-cont">
        {FirstStep && <CartContent goToCheckout={goToCheckout} />}
        {!FirstStep && (
          <CartCheckoutForm
            cities={cities}
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
