import { createEffect } from "effector-root";
import { TMenu } from "features/home/types";
import { TOrder } from "features/orders/types";
import { createOrderRequest } from "features/orders/api";

/** FAKE API TO CREATE ORDER **/
export const createOrderFx = createEffect<
  { cart: TMenu; total: number },
  TOrder,
  Error
>({
  handler: createOrderRequest,
  name: "createOrderFx",
});
