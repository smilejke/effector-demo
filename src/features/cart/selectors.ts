import { useStore } from "effector-react";
import { $cart, $cartLength, $totalPrice } from "features/cart/stores";
import { TMenu } from "features/home/types";

export const useCart = (): TMenu => {
  return useStore($cart);
};

export const useIsCartEmpty = (): boolean => {
  const cart = useStore($cart);
  return cart.length === 0;
};

export const useCartLength = (): number => {
  return useStore($cartLength);
};

export const useTotalPrice = (): number => {
  return useStore($totalPrice);
};
