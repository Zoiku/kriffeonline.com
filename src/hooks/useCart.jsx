import { atom, useAtom } from "jotai";
import { cartItems, calculateCartPricing } from "../utils/cart";
import { useMemo } from "react";

const cartItemsAtom = atom(cartItems);

const useCart = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);

  const cartPricing = useMemo(
    () => calculateCartPricing(cartItems),
    [cartItems]
  );

  const handleAddCartItem = (cartItem) => {
    setCartItems([...cartItems, cartItem]);
  };

  const handleChangeCartItemQuantity = (e, cartItemIndex) => {
    let quantity = Number(e.target.value);
    let updatedCartItems = cartItems.map((cartItem, index) => {
      if (cartItemIndex === index) {
        return {
          ...cartItem,
          pricing: {
            ...cartItem.pricing,
            quantity,
            total: quantity * cartItem.details.price,
          },
        };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const handleIncreaseCartItemQuantity = (cartItemIndex) => {
    let updatedCartItems = cartItems.map((cartItem, index) => {
      if (cartItemIndex === index) {
        return {
          ...cartItem,
          pricing: {
            ...cartItem.pricing,
            quantity: cartItem.pricing.quantity + 1,
            total: (cartItem.pricing.quantity + 1) * cartItem.details.price,
          },
        };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const handleReduceCartItemQuantity = (cartItemIndex) => {
    let updatedCartItems = cartItems.map((cartItem, index) => {
      if (cartItemIndex === index) {
        return {
          ...cartItem,
          pricing: {
            ...cartItem.pricing,
            quantity: cartItem.pricing.quantity - 1,
            total: (cartItem.pricing.quantity - 1) * cartItem.details.price,
          },
        };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveCartItem = (cartItemIndex) => {
    let updatedCartItems = cartItems.filter((cartItem, index) => {
      if (cartItemIndex !== index) {
        return cartItem;
      }
    });
    setCartItems(updatedCartItems);
  };

  return {
    cartItems,
    cartPricing,
    handleAddCartItem,
    handleChangeCartItemQuantity,
    handleIncreaseCartItemQuantity,
    handleReduceCartItemQuantity,
    handleRemoveCartItem,
  };
};

export default useCart;
