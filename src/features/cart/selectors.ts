import { $cartLength } from "features/cart/stores";
import { useStore } from "effector-react";

export const useCartLength = (): number => {
  return useStore($cartLength);
};
