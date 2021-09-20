import update from "immutability-helper";
import { combine, createStore } from "effector-root";
import { TMenu } from "features/home/types";
import { TPromoCode } from "features/cart/types";

export const $cart = createStore<TMenu>([], { name: "$cart" });

export const $cartLength = $cart.map((items) =>
  items.reduce((acc, item) => acc + item.count, 0)
);

export const $cartGrouped = $cart.map((state) => {
  return state.reduce((acc, item) => {
    const has = acc?.find((pos) => pos.id === item.id);

    if (has) {
      const index = acc.indexOf(has);
      const updated = update(has, {
        count: { $set: has.count + 1 },
        total: {
          $set: has.total ? has.total + item.price : item.price,
        },
      });

      return update(acc, {
        [index]: { $set: updated },
      });
    }

    const updated = update(item, {
      total: { $set: item.price },
    });

    return update(acc, { $push: [updated] });
  }, [] as TMenu);
});

export const $codeCheckStatus = createStore<string>("", {
  name: "$codeCheckStatus",
});

export const $promoCode = createStore<TPromoCode>({} as TPromoCode, {
  name: "$promoCode",
});

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

export const $totalPrice = $cartWithCode.map((items) =>
  items.reduce((acc, item) => acc + (item.total || 0), 0)
);
