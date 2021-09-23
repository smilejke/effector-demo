import { useStore } from "effector-react";
import { TOrders } from "features/orders/types";
import { $orders } from "features/orders/stores";
import { createOrderFx } from "features/orders/controllers";

export const useOrders = (): TOrders => {
  return useStore($orders);
};

export const useOrderFetching = (): boolean => {
  return useStore(createOrderFx.pending);
};
