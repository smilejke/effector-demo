import { createEffect, createEvent } from "effector-root";
import { checkPromoCodeRequest } from "features/cart/api";
import { TMenuPosition } from "features/home/types";
import { CartItem, TPromoCode } from "features/cart/types";

/** add menu position to cart **/
export const addToCart = createEvent<TMenuPosition>("addToCart");

/** remove menu position from cart **/
export const deleteFromCart = createEvent<CartItem>("deleteFromCart");

/** FAKE API TO GET MENU POSITIONS **/
export const checkPromoCodeFx = createEffect<string, TPromoCode, Error>({
  handler: checkPromoCodeRequest,
  name: "checkPromoCodeFx",
});

/** set promo code request orders **/
export const setCodeCheckResult = createEvent<string>("setCodeCheckResult");

/** clear promo code check orders store **/
export const resetPromoCode = createEvent<void>("resetPromoCode");

/** clear cart and all related to it things **/
export const resetCart = createEvent<void>("resetCart");
