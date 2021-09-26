import { createEffect } from "effector-root";
import { TOrder } from "features/orders/types";
import { TCart } from "features/cart/types";
import { createOrderRequest } from "features/orders/api";

/** FAKE API TO CREATE ORDER **/
export const createOrderFx = createEffect<
  { cart: TCart; total: number },
  TOrder,
  Error
>({
  handler: createOrderRequest,
  name: "createOrderFx",
});
