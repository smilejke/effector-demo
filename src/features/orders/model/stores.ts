import { TOrders } from "features/orders/types";
import { MOCK_ORDERS } from "mocks/orders";

import { orderDomain } from "./domain";

const { createStore } = orderDomain;

/**
 * Store to keep successful confirmed user's orders.
 * **/
export const $orders = createStore<TOrders>(MOCK_ORDERS, { name: "$orders" });
