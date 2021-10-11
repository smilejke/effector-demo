import { combine, createStore } from "effector-root";
import { TMenuPosition } from "features/menu/types";
import { TCart, TPromoCode } from "features/cart/types";
import { getSumToFixed } from "libs/sumToFixed";
import { countTotalPriceWithCode } from "libs/discountCounter";

/**
 * Store to keep all selected menu positions.
 * **/
export const $cart = createStore<TCart>([], { name: "$cart" });

/**
 * Dynamic store to count total amount of cart items based on $cart store.
 * **/
export const $cartLength = $cart.map((items) => items.length);

/**
 * Dynamic store to present cart in a different form to exclude all copies and to count
 * all positions amount and total cost. Based on $cart store.
 * **/
export const $cartGrouped = $cart.map((state): TCart => {
  const result = state.reduce((acc, item) => {
    if (acc[item.id]) {
      return {
        ...acc,
        [item.id]: {
          ...item,
          count: acc[item.id].count + 1,
          total: getSumToFixed(acc[item.id].total + item.price),
        },
      };
    }
    return {
      ...acc,
      [item.id]: {
        ...item,
        count: 1,
        total: item.price,
      },
    };
  }, {} as Record<string, TMenuPosition & { total: number }>);

  return Object.values(result).sort((a, b) => b.id - a.id);
});

/**
 * Status of checkPromoCodeFx (done/fail) to use on react side to render success or fail icons, text, etc.
 * **/
export const $codeCheckStatus = createStore<string>("", {
  name: "$codeCheckStatus",
});

/**
 * Store to keep promo code data.
 * **/
export const $promoCode = createStore<TPromoCode>({} as TPromoCode, {
  name: "$promoCode",
});

/**
 * Dynamic store to apply promo code discount on cart without changing cart store.
 * This store is used on react side as final result of all manipulations with cart:
 * ($cart -> $cartGrouped -> $cartWithCode). The main feature here is the fact that we can only
 * add to cart/remove from cart and all necessary future actions will be done dynamically.
 * **/
export const $cartWithCode = combine($cartGrouped, $promoCode, (cart, code) => {
  if (code.category) {
    if (code.category === "all") {
      return cart
        .map((item) => ({
          ...item,
          price: countTotalPriceWithCode(item.price, code.amount),
          total: countTotalPriceWithCode(item.total, code.amount),
        }))
        .sort((a, b) => b.id - a.id);
    }
    return cart
      .map((item) =>
        item.category === code.category
          ? {
              ...item,
              price: countTotalPriceWithCode(item.price, code.amount),
              total: countTotalPriceWithCode(item.total, code.amount),
            }
          : item
      )
      .sort((a, b) => b.id - a.id);
  }
  return cart.sort((a, b) => b.id - a.id);
});

/**
 * Dynamic store to count total cart price to be used on react side.
 * **/
export const $totalPrice = $cartWithCode.map((items) =>
  items.reduce((acc, item) => acc + item.total, 0)
);
