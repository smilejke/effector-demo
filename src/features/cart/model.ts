import update from "immutability-helper";

import {
  addToCart,
  checkPromoCodeFx,
  deleteFromCart,
  setCodeCheckResult,
} from "features/cart/controllers";
import { $cart, $codeCheckStatus, $promoCode } from "features/cart/stores";
import { createModal } from "libs/createModal";

export const promoCodeModal = createModal("promoCodeModal");

$cart
  .on(addToCart, (state, position) => {
    const updated = update(position, {
      total: { $set: position.price },
    });

    return update(state, { $push: [updated] });
  })
  .on(deleteFromCart, (state, position) => {
    const selectedPosition = state.find((pos) => pos.id === position.id);

    if (selectedPosition) {
      const index = state.indexOf(selectedPosition);
      return update(state, { $splice: [[index, 1]] });
    }
  });

$codeCheckStatus
  .on(setCodeCheckResult, (_, payload) => payload)
  .reset(checkPromoCodeFx)
  .reset(promoCodeModal.close);

$promoCode.on(
  checkPromoCodeFx.done.map(({ result }) => result),
  (_, payload) => payload
);
