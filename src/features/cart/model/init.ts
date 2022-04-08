import { forward, guard } from "effector";
import {
  checkPromoCodeFx,
  resetCart,
  resetPromoCode,
  setCodeCheckResult,
} from "features/cart/model/controllers";
import { confirmOrderModal } from "features/cart/model/model";

import "./model";

/**
 * Read as:
 * 1. When checkPromoCodeFx effect passed successful, return "done" string.
 * 2. When checkPromoCodeFx fails return "fail" string.
 * 3. When any of points above triggers, call setCodeCheckResult with their value returned.
 * **/
forward({
  from: [
    checkPromoCodeFx.done.map(() => "done"),
    checkPromoCodeFx.fail.map(() => "fail"),
  ],
  to: setCodeCheckResult,
});

/**
 * Read as:
 * 1. When setCodeCheckResult event is called,
 * 2. Check if it's argument is equal to empty string,
 * 3. Call resetPromoCode event if "true".
 * **/
guard({
  source: setCodeCheckResult,
  filter: (value) => value === "",
  target: resetPromoCode,
});

/** When confirmOrderModal's close method is called by user, call resetCart event. **/
forward({
  from: confirmOrderModal.close,
  to: resetCart,
});
