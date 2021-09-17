import { createEffect, createEvent } from "effector-root";
import { checkPromoCodeRequest } from "features/cart/api";
import { TMenuPosition } from "features/home/types";

export const addToCart = createEvent<TMenuPosition>("addToCart");
export const deleteFromCart = createEvent<TMenuPosition>("deleteFromCart");

/** FAKE API TO GET MENU POSITIONS **/
export const checkPromoCodeFx = createEffect<string, number, Error>({
  handler: checkPromoCodeRequest,
  name: "checkPromoCodeFx",
});

export const setCodeCheckResult = createEvent<string>("setCodeCheckResult");
