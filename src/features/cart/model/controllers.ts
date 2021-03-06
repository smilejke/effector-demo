import { checkPromoCodeRequest } from "features/cart/api";
import { TMenuPosition } from "features/menu/types";
import { TPromoCode } from "features/cart/types";

import { cartDomain } from "./domain";

const { createEvent, createEffect } = cartDomain;

/** Add menu position to cart. **/
export const addToCart = createEvent<TMenuPosition>("addToCart");

/** Remove menu position from cart. **/
export const deleteFromCart = createEvent<TMenuPosition>("deleteFromCart");

/** FAKE API TO GET MENU POSITIONS **/
export const checkPromoCodeFx = createEffect<string, TPromoCode, Error>({
  handler: checkPromoCodeRequest,
  name: "checkPromoCodeFx",
});

/** Set promo code request status after it's done/fail. **/
export const setCodeCheckResult = createEvent<string>("setCodeCheckResult");

/** Clear promo code data store. **/
export const resetPromoCode = createEvent<void>("resetPromoCode");

/** Clear cart and all related to it stores (promo code status, promo code data). **/
export const resetCart = createEvent<void>("resetCart");
