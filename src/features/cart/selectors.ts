import { useStore } from "effector-react";
import { $cartLength, $totalPrice } from "features/cart/stores";

export const useCartLength = (): number => {
  return useStore($cartLength);
};

export const useTotalPrice = (): number => {
  return useStore($totalPrice);
};
