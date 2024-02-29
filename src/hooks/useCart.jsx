import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { calculateCartPricing } from "../utils/cart";
import { useMemo } from "react";
import useAlert from "./useAlert";

const cartItemsAtom = atomWithStorage(
  "cart",
  localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
);

const useCart = () => {
  const { handleOpenSuccessAlert } = useAlert();
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const cartPricing = useMemo(
    () => calculateCartPricing(cartItems),
    [cartItems]
  );
  const handleAddCartItem = (productItem) => {
    setCartItems([
      ...cartItems,
      {
        id: productItem.id,
        category: productItem.category,
        description: productItem.description,
        name: productItem.name,
        price: productItem.price,
        pricing: {
          quantity: 1,
          total: productItem.price,
        },
      },
    ]);
    handleOpenSuccessAlert("Added to Cart");
  };
  const handleChangeCartItemQuantity = (e, id) => {
    let quantity = Number(e.target.value);
    let updatedCartItems = cartItems.map((cartItem) => {
      if (id === cartItem.id) {
        return {
          ...cartItem,
          pricing: {
            ...cartItem.pricing,
            quantity,
            total: quantity * cartItem.price,
          },
        };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };
  const handleIncreaseCartItemQuantity = (id) => {
    let updatedCartItems = cartItems.map((cartItem) => {
      if (id === cartItem.id) {
        return {
          ...cartItem,
          pricing: {
            ...cartItem.pricing,
            quantity: cartItem.pricing.quantity + 1,
            total: (cartItem.pricing.quantity + 1) * cartItem.price,
          },
        };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };
  const handleReduceCartItemQuantity = (id) => {
    let updatedCartItems = cartItems.map((cartItem) => {
      if (id === cartItem.id) {
        return {
          ...cartItem,
          pricing: {
            ...cartItem.pricing,
            quantity: cartItem.pricing.quantity - 1,
            total: (cartItem.pricing.quantity - 1) * cartItem.price,
          },
        };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };
  const handleRemoveCartItem = (id) => {
    let updatedCartItems = cartItems.filter((cartItem) => {
      if (id !== cartItem.id) {
        return cartItem;
      }
    });
    setCartItems(updatedCartItems);
  };
  const isProductItemAddedToCart = (id) => {
    return cartItems.some((cartItem) => cartItem.id === id);
  };

  return {
    cartItems,
    cartPricing,
    isProductItemAddedToCart,
    handleAddCartItem,
    handleChangeCartItemQuantity,
    handleIncreaseCartItemQuantity,
    handleReduceCartItemQuantity,
    handleRemoveCartItem,
  };
};

export default useCart;
