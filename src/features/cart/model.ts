import update from "immutability-helper";

import {
  addToCart,
  checkPromoCodeFx,
  deleteFromCart,
  resetPromoCode,
  setCodeCheckResult,
} from "features/cart/controllers";
import { $cart, $codeCheckStatus, $promoCode } from "features/cart/stores";
import { createModal } from "libs/createModal";
import { TOrder } from "features/orders/types";

export const confirmOrderModal = createModal<TOrder>("confirmOrderModal");

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
  })
  .reset(confirmOrderModal.close);

$codeCheckStatus
  .on(setCodeCheckResult, (_, payload) => payload)
  .reset(checkPromoCodeFx);

$promoCode
  .on(checkPromoCodeFx.done, (_, payload) => payload.result)
  .reset(resetPromoCode);
