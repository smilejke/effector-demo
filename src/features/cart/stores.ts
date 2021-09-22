import { combine, createStore } from "effector-root";
import { TMenu, TMenuPosition } from "features/home/types";
import { TPromoCode } from "features/cart/types";

/**
 * store to keep all selected menu positions
 * **/
export const $cart = createStore<TMenu>([], { name: "$cart" });

/**
 * dynamic store to count total amount of cart items based on $cart store
 * **/
export const $cartLength = $cart.map((items) =>
  items.reduce((acc, item) => acc + item.count, 0)
);

/**
 * dynamic store to present cart in a different form to exclude all copies and to count
 * all positions amount and total cost. Based on $cart store.
 * **/
export const $cartGrouped = $cart.map((state): TMenu => {
  const result = state.reduce((acc, item) => {
    if (acc[item.id]) {
      return {
        ...acc,
        [item.id]: {
          ...item,
          count: acc[item.id].count + 1,
          total: acc[item.id].total + item.price,
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
 * status of checkPromoCodeFx (done/fail)
 * **/
export const $codeCheckStatus = createStore<string>("", {
  name: "$codeCheckStatus",
});

/**
 * store to keep promo code data
 * **/
export const $promoCode = createStore<TPromoCode>({} as TPromoCode, {
  name: "$promoCode",
});

/**
 * dynamic store to apply promo code discount on cart without changing cart store
 * **/
export const $cartWithCode = combine($cartGrouped, $promoCode, (cart, code) => {
  if (code.category) {
    if (code.category === "all") {
      return cart.map((item) => ({
        ...item,
        price: item.price - item.price * code.amount,
        total: item.total && item.total - item.total * code.amount,
      }));
    }
    return cart.map((item) =>
      item.category === code.category
        ? {
            ...item,
            price: item.price - item.price * code.amount,
            total: item.total && item.total - item.total * code.amount,
          }
        : item
    );
  }
  return cart;
});

/**
 * dynamic store to count total cart price
 * **/
export const $totalPrice = $cartWithCode.map((items) =>
  items.reduce((acc, item) => acc + (item.total || 0), 0)
);
