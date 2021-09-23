import "./model";
import { forward } from "effector";
import { createOrderFx } from "features/orders/controllers";
import { confirmOrderModal } from "features/cart/model";

forward({
  from: createOrderFx.doneData,
  to: confirmOrderModal.open,
});
