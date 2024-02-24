import "../styles/Cart.css";
import CenteredSection from "../components/Centered";
import { CartHead, CartSummary, CartBody } from "../components/Cart/Index";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <CenteredSection className={"cart-page"}>
        {cartItems && cartItems.length > 0 ? (
          <>
            <div className="cart-page-inner cart-items-container">
              <table className="cart-table">
                <CartHead />
                <CartBody cartItems={cartItems} />
              </table>
            </div>
            <div className="cart-page-inner cart-total-summary">
              <CartSummary />
            </div>
          </>
        ) : (
          <>Your cart is empty</>
        )}
      </CenteredSection>
    </div>
  );
};

export default Cart;
