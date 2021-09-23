import update from "immutability-helper";
import { $orders } from "features/orders/stores";
import { createOrderFx } from "features/orders/controllers";

$orders.on(createOrderFx.done, (state, payload) => {
  return update(state, { $push: [payload.result] });
});
