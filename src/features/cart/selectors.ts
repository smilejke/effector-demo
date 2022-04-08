import { useStore } from "effector-react";

import {
  $cartLength,
  $cartWithCode,
  $codeCheckStatus,
  $promoCode,
  $totalPrice,
} from "features/cart/model/stores";
import { confirmOrderModal } from "features/cart/model/model";
import { checkPromoCodeFx } from "features/cart/model/controllers";
import { TCart, TPromoCode } from "features/cart/types";
import { TOrder } from "features/orders/types";

export const useCart = (): TCart => {
  return useStore($cartWithCode);
};

export const useIsCartEmpty = (): boolean => {
  const cart = useStore($cartWithCode);
  return cart.length === 0;
};

export const useCartLength = (): number => {
  return useStore($cartLength);
};

export const useTotalPrice = (): number => {
  return useStore($totalPrice);
};

export const useConfirmModalVisible = (): boolean => {
  return useStore(confirmOrderModal.visible);
};

export const useConfirmModalPayload = (): TOrder | null => {
  return useStore(confirmOrderModal.state).payload;
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
