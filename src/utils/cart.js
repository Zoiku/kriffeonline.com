import img1 from "../assets/Products/cross-chain.png";
import img2 from "../assets/Products/bible.jpg";

export const cartItems = [
  {
    details: {
      category: "Book",
      name: "New King James Holy Bible",
      image: img2,
      price: 3000,
    },
    pricing: {
      quantity: 1,
      total: 100,
    },
  },
  {
    details: {
      category: "Jewelry and Accessories",
      name: "Gold Cross Chain (Men)",
      image: img1,
      price: 3000,
    },
    pricing: {
      quantity: 1,
      total: 100,
    },
  },
];

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
