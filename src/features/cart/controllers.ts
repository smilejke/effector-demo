import { createEffect, createEvent } from "effector-root";
import { TMenuPosition } from "features/home/types";
import { checkPromoCodeRequest } from "features/cart/api";
import { TPromoCodeResponse } from "features/cart/types";

export const addToCart = createEvent<TMenuPosition>("addToCart");
export const deleteFromCart = createEvent<TMenuPosition>("deleteFromCart");

/** FAKE API TO GET MENU POSITIONS **/
export const checkPromoCodeFx = createEffect<string, TPromoCodeResponse, Error>(
  {
    handler: checkPromoCodeRequest,
    name: "checkPromoCodeFx",
  }
);
