import "../styles/Checkout.css";
import CenteredSection from "../components/Centered";
import Button from "../components/Button";
import Input from "../components/Input";
import image from "../assets/ipad.jpg";

export const CheckoutSectionGroup = ({ children, title, className }) => (
  <div className={`${className} checkout-page-section-group`}>
    <div className="checkout-page-section-group-title">{title}</div>
    <div>{children}</div>
  </div>
);

const CheckoutOrderItem = () => (
  <div className="checkout-page-order-item">
    <div className="checkout-page-order-item-head">
      <div className="checkout-page-order-item-image">
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <small>Product Name</small>
        </div>
        <div>
          <small>GHS0</small>
        </div>
      </div>
    </div>
    <div>
      <small>Qty: </small>
      <span>
        <small>1</small>
      </span>
    </div>
  </div>
);

const Checkout = () => {
  return (
    <div className="checkout-page">
      <CenteredSection className={"checkout-page-inner"}>
        <div className="checkout-page-details">
          <CheckoutSectionGroup
            title={"Shipping Details"}
            className="checkout-page-details-shipment"
          >
            <div className="checkout-page-details-inputs">
              <Input autoFocus label={"Full Name"} />
              <div className="checkout-page-details-payment-inputs-duo">
                <Input label={"Email"} />
                <Input label={"Phone"} />
              </div>
              <Input label={"Address"} />
            </div>
          </CheckoutSectionGroup>
          <CheckoutSectionGroup
            title={"Payment Details"}
            className="checkout-page-details-payment"
          >
            <div className="checkout-page-details-inputs">
              <div className="checkout-page-details-payment-inputs-duo">
                <Input label={"Name on card"} />
                <Input label={"Card Number"} />
              </div>
              <div className="checkout-page-details-payment-inputs-duo">
                <Input label={"Expiration Date"} />
                <Input type={"password"} label={"CVC Code"} />
              </div>
            </div>
          </CheckoutSectionGroup>
        </div>

        <div className="checkout-page-summary">
          <CheckoutSectionGroup
            title={"Order Summary"}
            className="checkout-page-summary-sticky"
          >
            <div className="checkout-page-summary-inner">
              <div className="checkout-page-order-items">
                {Array.from(Array(1)).map(() => (
                  <CheckoutOrderItem />
                ))}
              </div>

              <div className="checkout-page-summary-pricing">
                <Button fullWidth theme={"theme2"} label={"Make Payment"} />
              </div>
            </div>
          </CheckoutSectionGroup>
        </div>
      </CenteredSection>
    </div>
  );
};

export default Checkout;
