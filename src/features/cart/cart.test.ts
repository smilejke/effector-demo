import { allSettled, fork, root } from "effector-root";
import {
  addToCart,
  checkPromoCodeFx,
  deleteFromCart,
  resetCart,
  setCodeCheckResult,
} from "./controllers";
import { $cart, $codeCheckStatus, $promoCode } from "./stores";
import "./model";

describe("Cart flow", () => {
  const TEST_MENU_POSITION = {
    category: "soups",
    count: 1,
    description:
      "280г, куриное филе, бекон, ветчина, маринованные огурцы, лук, каперсы, маслины, лимон, сметана",
    id: 885999064,
    price: 6.7,
    src: "/static/media/soup1.4b6df3a1.jpeg",
    title: "Солянка",
  };
  const TEST_PROMO_CODE = {
    amount: 0.2,
    category: "all",
    code: "effector1",
    description: "20% discount on all menu positions",
  };

  test("Add product to cart from menu", async () => {
    const scope = fork(root);

    await allSettled(addToCart, {
      params: TEST_MENU_POSITION,
      scope,
    });

    expect(scope.getState($cart)).toEqual([
      { ...TEST_MENU_POSITION, total: TEST_MENU_POSITION.price },
    ]);
  });

  test("Remove product from cart", async () => {
    const scope = fork(root);

    await allSettled(addToCart, {
      params: TEST_MENU_POSITION,
      scope,
    });

    expect(scope.getState($cart).length).toBe(1);

    await allSettled(deleteFromCart, {
      params: { ...TEST_MENU_POSITION, total: TEST_MENU_POSITION.price },
      scope,
    });

    expect(scope.getState($cart)).toEqual([]);
  });

  test("Clear cart", async () => {
    const scope = fork(root);

    await allSettled(addToCart, {
      params: TEST_MENU_POSITION,
      scope,
    });

    expect(scope.getState($cart).length).toBe(1);

    await allSettled(resetCart, {
      scope,
    });

    expect(scope.getState($cart).length).toBe(0);
  });

  test("Get promo code and set promo code status", async () => {
    const scope = fork(root);

    await allSettled(checkPromoCodeFx, {
      params: TEST_PROMO_CODE.code,
      scope,
    });

    expect(scope.getState($promoCode)).toEqual(TEST_PROMO_CODE);

    await allSettled(setCodeCheckResult, {
      params: "done",
      scope,
    });

    expect(scope.getState($codeCheckStatus)).toBe("done");
  });

  test("Reset promo code and promo code status", async () => {
    const scope = fork(root);

    await allSettled(checkPromoCodeFx, {
      params: TEST_PROMO_CODE.code,
      scope,
    });

    expect(scope.getState($promoCode)).toEqual(TEST_PROMO_CODE);

    await allSettled(setCodeCheckResult, {
      params: "done",
      scope,
    });

    expect(scope.getState($codeCheckStatus)).toBe("done");

    await allSettled(resetCart, {
      scope,
    });

    expect(scope.getState($promoCode)).toEqual({});
    expect(scope.getState($codeCheckStatus)).toBe("");
  });
});
