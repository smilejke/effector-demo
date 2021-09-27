import { allSettled, fork, root } from "effector-root";
import { createOrderFx } from "features/orders/controllers";
import { $orders } from "features/orders/stores";
import { MOCK_ORDERS } from "mocks/orders";

import "./model";
import "./init";

describe("Orders flow", () => {
  test("Create order and add to $orders store", async () => {
    const scope = fork(root);
    const TEST_ORDER = { ...MOCK_ORDERS[0], orderId: "000000" };

    /** $orders store has 3 mock orders by the default **/
    expect(scope.getState($orders).length).toBe(3);

    await allSettled(createOrderFx, {
      params: TEST_ORDER,
      scope,
    });
    expect(scope.getState($orders).length).toBe(4);
  });
});
