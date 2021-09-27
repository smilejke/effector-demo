import { forward } from "effector";
import { createOrderFx } from "features/orders/controllers";
import { confirmOrderModal } from "features/cart/model";
import "./model";

forward({
  from: createOrderFx.doneData,
  to: confirmOrderModal.open,
});
