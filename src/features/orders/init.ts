import { forward, guard } from "effector";
import { checkOrderStatusFx, createOrderFx } from "features/orders/controllers";
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

/**
 * When order was created successful, use it's response to make extra request to emulate order's status changes
 * **/
forward({
  from: createOrderFx.doneData,
  to: checkOrderStatusFx,
});

/**
 * Repeat order's status changes emulation until order would have "closed" status
 * **/
guard({
  source: checkOrderStatusFx.doneData,
  filter: ({ status }) => status !== "closed",
  target: checkOrderStatusFx,
});
