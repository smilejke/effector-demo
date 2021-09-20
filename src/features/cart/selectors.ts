import { useStore } from "effector-react";
import {
  $cartLength,
  $codeCheckStatus,
  $promoCode,
  $totalCart,
  $totalPrice,
} from "features/cart/stores";
import { promoCodeModal } from "features/cart/model";
import { checkPromoCodeFx } from "features/cart/controllers";
import { TMenu } from "features/home/types";
import { TPromoCode } from "features/cart/types";

export const useCart = (): TMenu => {
  return useStore($totalCart);
};

export const useIsCartEmpty = (): boolean => {
  const cart = useStore($totalCart);
  return cart.length === 0;
};

export const useCartLength = (): number => {
  return useStore($cartLength);
};

export const useTotalPrice = (): number => {
  return useStore($totalPrice);
};

export const useConfirmModalVisible = (): boolean => {
  return useStore(promoCodeModal.visible);
};

export const useCheckPromoCodeFetching = (): boolean => {
  return useStore(checkPromoCodeFx.pending);
};

export const usePromoCheckStatus = (): string => {
  return useStore($codeCheckStatus);
};

export const usePromoCode = (): TPromoCode => {
  return useStore($promoCode);
};
