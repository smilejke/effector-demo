import update from "immutability-helper";

import {
  addToCart,
  checkPromoCodeFx,
  deleteFromCart,
  setCodeCheckResult,
} from "features/cart/controllers";
import { $cart, $codeCheckStatus } from "features/cart/stores";
import { createModal } from "libs/createModal";

export const promoCodeModal = createModal("promoCodeModal");

$cart
  .on(addToCart, (state, position) => {
    const has = state.find((item) => item.id === position.id);

    if (has) {
      const index = state.indexOf(has);

      const updated = update(has, {
        count: { $set: has.count + 1 },
        total: {
          $set: has.total ? has.total + position.price : position.price,
        },
      });

      return update(state, {
        [index]: { $set: updated },
      });
    }

    const updated = update(position, {
      total: { $set: position.price },
    });

    return update(state, { $push: [updated] });
  })
  .on(deleteFromCart, (state, position) => {
    const selectedPosition = state.find((pos) => pos.id === position.id);

    if (selectedPosition) {
      const index = state.indexOf(selectedPosition);

      if (selectedPosition.count > 1) {
        const updated = update(selectedPosition, {
          count: { $set: selectedPosition.count - 1 },
          total: {
            $set: selectedPosition.total
              ? selectedPosition.total - position.price
              : position.price,
          },
        });

        return update(state, {
          [index]: { $set: updated },
        });
      }

      return update(state, { $splice: [[index, 1]] });
    }
  });

$codeCheckStatus
  .on(setCodeCheckResult, (_, payload) => payload)
  .reset(checkPromoCodeFx)
  .reset(promoCodeModal.close);
