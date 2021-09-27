import { forward } from "effector";
import { createOrderFx } from "features/orders/controllers";
import { confirmOrderModal } from "features/cart/model";
import "./model";

/**
 * Read as:
 * 1. When order was created successful by the createOrderFx effect,
 * 2. Take it's response using .doneData method (it's the same with .done.map(({result}) => result),
 * 3. Open confirmOrderModal with that data as modal's payload.
 * **/
forward({
  from: createOrderFx.doneData,
  to: confirmOrderModal.open,
});
