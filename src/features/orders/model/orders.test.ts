import { allSettled, fork } from "effector";
import { createOrderFx } from "features/orders/model/controllers";
import { $orders } from "features/orders/model/stores";
import { MOCK_ORDERS } from "mocks/orders";

import { orderDomain } from "./domain";

import "./model";
import "./init";

describe("Orders flow", () => {
  test("Create order and add to $orders store", async () => {
    const scope = fork(orderDomain);
    const TEST_ORDER = { ...MOCK_ORDERS[0] };

    /** $orders store has 3 mock orders by the default **/
    expect(scope.getState($orders).length).toBe(3);

    await allSettled(createOrderFx, {
      params: TEST_ORDER,
      scope,
    });
    expect(scope.getState($orders).length).toBe(4);
  }, 20000);

  test("Change order status", async () => {
    const scope = fork(orderDomain);
    const TEST_ORDER = { ...MOCK_ORDERS[0] };

    await allSettled(createOrderFx, {
      params: TEST_ORDER,
      scope,
    });

    /**
     * new Date() will be set on new order, so we can get exact order with sorting by date.
     * We have cycle of 3 requests with 5000ms timeouts after createOrderFx.done
     * to change order status to emulate websockets / server events for demo issues
     * "accepted"(after createOrderFx.done) -> "cooking" -> "ready" -> "closed"
     * **/
    const orderStatus = scope
      .getState($orders)
      .sort((a, b) => b.date.getTime() - a.date.getTime())[0].status;

    expect(orderStatus).toBe("closed");
  }, 20000);
});
