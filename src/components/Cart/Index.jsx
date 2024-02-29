import useCart from "../../hooks/useCart";
import Currency from "../../components/Currency";
import Button from "../../components/Button";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import { IconButton } from "@mui/material";

export const CartItem = ({ cartItem }) => {
  const {
    handleRemoveCartItem,
    handleIncreaseCartItemQuantity,
    handleReduceCartItemQuantity,
    handleChangeCartItemQuantity,
  } = useCart();
  return (
    <tr className="cart-table-row">
      <td className="cart-table-data">
        <div className="cart-item-image">
          <img src={""} alt="Img" />
        </div>
      </td>
      <td className="cart-table-data">
        <div className="cart-item-description">
          <div>
            <small>{cartItem.category}</small>
          </div>
          <div className="cart-item-name">{cartItem.name}</div>
          <div>
            <small>
              <Currency value={cartItem.price} />
            </small>
          </div>
        </div>
      </td>
      <td className="cart-table-data">
        <CartQuantityInput
          cartItemId={cartItem.id}
          value={cartItem.pricing.quantity}
          handleIncreaseCartItemQuantity={handleIncreaseCartItemQuantity}
          handleReduceCartItemQuantity={handleReduceCartItemQuantity}
          onChange={(e) => handleChangeCartItemQuantity(e, cartItem.id)}
        />
      </td>
      <td className="cart-table-data">
        <div className="cart-item-total">
          <Currency value={cartItem.pricing.total} />
        </div>
      </td>
      <td className="cart-table-data">
        <div
          className="cart-item-remove"
          onClick={() => handleRemoveCartItem(cartItem.id)}
        >
          <IconButton>
            <DeleteOutlineSharpIcon fontSize={"small"} />
          </IconButton>
        </div>
      </td>
    </tr>
  );
};

const CartQuantityInput = (props) => {
  const {
    cartItemId,
    handleReduceCartItemQuantity,
    handleIncreaseCartItemQuantity,
    ...rest
  } = props;

  return (
    <div className="cart-quantity-input-box">
      <div
        className="cart-quantity-input-button"
        onClick={() => handleReduceCartItemQuantity(cartItemId)}
      >
        -
      </div>
      <div className="cart-quantity-input-container">
        <input min={1} {...rest} className="cart-quantity-input" />
      </div>
      <div
        className="cart-quantity-input-button"
        onClick={() => handleIncreaseCartItemQuantity(cartItemId)}
      >
        +
      </div>
    </div>
  );
};

export const CartHead = () => (
  <thead className="cart-table-head">
    <tr className="cart-table-row">
      <th className="cart-table-heading">Product</th>
      <th className="cart-table-heading">Description</th>
      <th className="cart-table-heading">Quantity</th>
      <th className="cart-table-heading">Sub Total</th>
      <th className="cart-table-heading"></th>
    </tr>
  </thead>
);

export const CartBody = ({ cartItems }) => {
  return (
    <tbody className="cart-table-body">
      {cartItems.map((cartItem, index) => (
        <CartItem key={index} cartItem={cartItem} />
      ))}
    </tbody>
  );
};

export const CartSummary = () => {
  const { cartPricing } = useCart();
  return (
    <div className="cart-summary-sticky">
      <div className="cart-summary-body">
        <div>Cart Summary</div>
        <div className="cart-summary-body-details">
          <div className="cart-summary-body-detail">
            <span>Subtotal</span>
            <span>
              <Currency value={cartPricing.subTotal} />
            </span>
          </div>
          <div className="cart-summary-body-detail">
            <span>Fees</span>
            <span>
              <Currency value={cartPricing.fees} />
            </span>
          </div>
          <div className="cart-summary-body-detail">
            <span>Total</span>
            <span>
              <Currency value={cartPricing.total} />
            </span>
          </div>
        </div>
        <div className="cart-summary-buttons">
          <Button theme={"theme0"} label={"Proceed to Checkout"} fullWidth />
          <Button theme={"theme1"} label={"Continue Shopping"} fullWidth />
        </div>
      </div>
    </div>
  );
};
