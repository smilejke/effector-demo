import { createStore } from "effector-root";
import { TOrder, TOrders } from "features/orders/types";
import { MOCK_ORDERS } from "mocks/orders";

export const $orders = createStore<TOrders>(MOCK_ORDERS, { name: "$orders" });
export const $selectedOrder = createStore<TOrder>({} as TOrder, {
  name: "$selectedOrder",
});
