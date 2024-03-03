export const calculateCartPricing = (cartItems) => {
  let subTotal = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.pricing.total,
    0
  );
  let fees = 0;
  let total = subTotal + fees;

  return {
    subTotal,
    fees,
    total,
  };
};
