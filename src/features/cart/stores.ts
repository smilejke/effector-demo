import update from "immutability-helper";
import { createStore } from "effector-root";
import { TMenu } from "features/home/types";
import { TPromoCode } from "features/cart/types";

export const $cart = createStore<TMenu>([], { name: "$cart" });
export const $cartLength = $cart.map((items) =>
  items.reduce((acc, item) => acc + item.count, 0)
);
export const $totalPrice = $cart.map((items) =>
  items.reduce((acc, item) => acc + (item.total || 0), 0)
);
export const $codeCheckStatus = createStore<string>("", {
  name: "$codeCheckStatus",
});
export const $promoCode = createStore<TPromoCode>({} as TPromoCode, {
  name: "$promoCode",
});

export const $totalCart = $cart.map((state) => {
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

// export const $totalPriceWithDiscount = combine(
//   $cart,
//   $promoCode,
//   (cart, code) => {
//     return cart.reduce(
//       (acc, item) => acc + item.total - item.total * code.amount,
//       0
//     );
//   }
// );
