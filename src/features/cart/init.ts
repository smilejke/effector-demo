import { forward, guard } from "effector";
import {
  checkPromoCodeFx,
  resetCart,
  resetPromoCode,
  setCodeCheckResult,
} from "features/cart/controllers";
import { confirmOrderModal } from "features/cart/model";

import "./model";

forward({
  from: [
    checkPromoCodeFx.done.map(() => "done"),
    checkPromoCodeFx.fail.map(() => "fail"),
  ],
  to: setCodeCheckResult,
});

guard({
  source: setCodeCheckResult,
  filter: (value) => value === "",
  target: resetPromoCode,
});

forward({
  from: confirmOrderModal.close,
  to: resetCart,
});
