import { TCheckOrderData, TOrder } from "features/orders/types";
import { TCart } from "features/cart/types";
import {
  checkOrderStatusRequest,
  createOrderRequest,
} from "features/orders/api";

import { orderDomain } from "./domain";

const { createEffect } = orderDomain;

/** FAKE API TO CREATE ORDER **/
export const createOrderFx = createEffect<
  { cart: TCart; total: number },
  TOrder,
  Error
>({
  handler: createOrderRequest,
  name: "createOrderFx",
});

/**
 * FAKE API TO EMULATE STATUS CHANGES (accepted => cooking => ready => closed)
 * **/
export const checkOrderStatusFx = createEffect<
  TCheckOrderData,
  TCheckOrderData,
  Error
>({
  handler: checkOrderStatusRequest,
  name: "checkOrderStatusFx",
});
