import { createStore } from "effector-root";
import { TMenu } from "features/home/types";

export const $cart = createStore<TMenu>([], { name: "$cart" });
export const $cartLength = $cart.map((items) => items.length);
export const $totalPrice = $cart.map((items) =>
  items.reduce((acc, item) => acc + item.price, 0)
);
