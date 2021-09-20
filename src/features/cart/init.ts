import { forward, guard } from "effector";
import {
  checkPromoCodeFx,
  resetPromoCode,
  setCodeCheckResult,
} from "features/cart/controllers";

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
