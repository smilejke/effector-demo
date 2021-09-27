import { createStore } from "effector-root";
import { TOrders } from "features/orders/types";
import { MOCK_ORDERS } from "mocks/orders";

/**
 * Store to keep successful confirmed user's orders.
 * **/
export const $orders = createStore<TOrders>(MOCK_ORDERS, { name: "$orders" });
