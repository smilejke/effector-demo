import { createStore } from "effector-root";
import { TMenu } from "features/home/types";

export const $cart = createStore<TMenu>([], { name: "$cart" });
export const $cartLength = $cart.map((items) => items.length);
