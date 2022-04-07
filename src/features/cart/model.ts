import update from "immutability-helper";

import {
  addToCart,
  checkPromoCodeFx,
  deleteFromCart,
  resetCart,
  resetPromoCode,
  setCodeCheckResult,
} from "features/cart/controllers";
import { $cart, $codeCheckStatus, $promoCode } from "features/cart/stores";
import { createModal } from "libs/createModal";
import { TOrder } from "features/orders/types";

export const confirmOrderModal = createModal<TOrder>("confirmOrderModal");


$cart
  .on(addToCart, (state, position) => {
    const updated = { ...position, total: position.price };

    return update(state, { $push: [updated] });
  })
  .on(deleteFromCart, (state, position) => {
    const selectedPosition = state.find((pos) => pos.id === position.id);

    if (!selectedPosition) return;

    const index = state.indexOf(selectedPosition);

    if (index === -1) return;
    return update(state, { $splice: [[index, 1]] });
  })
  .reset(resetCart);

$codeCheckStatus
  .on(setCodeCheckResult, (_, payload) => payload)
  .reset(checkPromoCodeFx)
  .reset(resetCart);

$promoCode
  .on(checkPromoCodeFx.done, (_, payload) => payload.result)
  .reset(resetPromoCode)
  .reset(resetCart);
