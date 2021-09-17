import "./model";
import { forward } from "effector";
import {
  checkPromoCodeFx,
  setCodeCheckResult,
} from "features/cart/controllers";

forward({
  from: [
    checkPromoCodeFx.done.map(() => "done"),
    checkPromoCodeFx.fail.map(() => "fail"),
  ],
  to: setCodeCheckResult,
});
