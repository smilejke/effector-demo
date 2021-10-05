import update from "immutability-helper";
import { $orders } from "features/orders/stores";
import { checkOrderStatusFx, createOrderFx } from "features/orders/controllers";

$orders
  .on(createOrderFx.done, (state, payload) => {
    return update(state, { $push: [payload.result] });
  })
  .on(checkOrderStatusFx.doneData, (state, payload) => {
    const has = state.find((order) => order.orderId === payload.orderId);

    if (has) {
      const updated = update(has, { status: { $set: payload.status } });
      const index = state.indexOf(has);
      return update(state, { [index]: { $set: updated } });
    }
  });
