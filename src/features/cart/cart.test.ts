import { allSettled, fork, root, Scope } from "effector-root";
import {
  addToCart,
  checkPromoCodeFx,
  deleteFromCart,
  resetCart,
} from "./controllers";
import {
  $cart,
  $cartGrouped,
  $cartWithCode,
  $codeCheckStatus,
  $promoCode,
  $totalPrice,
} from "./stores";
import { MOCK_MENU } from "mocks/menu";
import { MOCK_PROMO_CODES } from "mocks/promo-codes";
import { TMenuPosition } from "features/menu/types";
import { getSumToFixed } from "libs/sumToFixed";

import "./model";
import "./init";
import { countTotalPriceWithCode } from "libs/discountCounter";

describe("Cart flow", () => {
  const TEST_MENU_POSITION = MOCK_MENU[0];
  const TEST_CART_ITEM = {
    ...TEST_MENU_POSITION,
    total: TEST_MENU_POSITION.price,
  };
  const TEST_PROMO_CODE_ALL = MOCK_PROMO_CODES[0];

  const addProductToCart = async (product: TMenuPosition, scope: Scope) => {
    await allSettled(addToCart, {
      params: product,
      scope,
    });
  };

  test("Add product to cart from menu", async () => {
    const scope = fork(root);

    await addProductToCart(TEST_MENU_POSITION, scope);

    expect(scope.getState($cart)).toEqual([TEST_CART_ITEM]);
  });

  test("Remove product from cart", async () => {
    const scope = fork(root);

    await addProductToCart(TEST_MENU_POSITION, scope);
    expect(scope.getState($cart).length).toBe(1);

    await allSettled(deleteFromCart, {
      params: TEST_CART_ITEM,
      scope,
    });
    expect(scope.getState($cart)).toEqual([]);
  });

  test("Clear cart", async () => {
    const scope = fork(root);

    await addProductToCart(TEST_MENU_POSITION, scope);
    expect(scope.getState($cart).length).toBe(1);

    await allSettled(resetCart, { scope });
    expect(scope.getState($cart).length).toBe(0);
  });

  test("Get promo code and set promo code status", async () => {
    const scope = fork(root);

    await allSettled(checkPromoCodeFx, {
      params: TEST_PROMO_CODE_ALL.code,
      scope,
    });

    expect(scope.getState($promoCode)).toEqual(TEST_PROMO_CODE_ALL);
    expect(scope.getState($codeCheckStatus)).toBe("done");
  });

  test("Reset promo code and promo code status", async () => {
    const scope = fork(root);

    await allSettled(checkPromoCodeFx, {
      params: TEST_PROMO_CODE_ALL.code,
      scope,
    });
    expect(scope.getState($promoCode)).toEqual(TEST_PROMO_CODE_ALL);
    expect(scope.getState($codeCheckStatus)).toBe("done");

    await allSettled(resetCart, { scope });
    expect(scope.getState($promoCode)).toEqual({});
    expect(scope.getState($codeCheckStatus)).toBe("");
  });

  test("Check if $cartGrouped and $cartWithCode builds correct", async () => {
    const scope = fork(root);
    const TEST_MENU_POSITION_SALAD = MOCK_MENU[5];
    const TEST_CART_ITEM_SALAD = {
      ...TEST_MENU_POSITION_SALAD,
      total: getSumToFixed(TEST_MENU_POSITION_SALAD.price),
    };
    const TEST_PROMO_CODE_SALADS = MOCK_PROMO_CODES[2];

    /**
     * 1. $cartGrouped is dynamic store based on $cart, so if cart is empty, $cartGrouped should be empty too
     * 2. $cartWithCode is dynamic store base on $cartGrouped + $promoCode, so it should be empty too.
     * **/
    expect(scope.getState($cart).length).toBe(0);
    expect(scope.getState($cartGrouped).length).toBe(0);
    expect(scope.getState($cartWithCode).length).toBe(0);

    /** add first unique product to cart ("soups" category) **/
    await addProductToCart(TEST_MENU_POSITION, scope);

    /** all the stores are the same coz there is only 1 product in the cart and no promo code present **/
    expect(scope.getState($cart)).toEqual([TEST_CART_ITEM]);
    expect(scope.getState($cartGrouped)).toEqual(scope.getState($cart));
    expect(scope.getState($cartWithCode)).toEqual(scope.getState($cart));

    /** add second (the same as first) product to cart **/
    await addProductToCart(TEST_MENU_POSITION, scope);

    /** now $cart contain 2 the same products **/
    expect(scope.getState($cart)).toEqual([TEST_CART_ITEM, TEST_CART_ITEM]);
    /** $cartGrouped grouped cart in 1 product with { count: 2, total: price * count } **/
    expect(scope.getState($cartGrouped)).toEqual([
      {
        ...TEST_CART_ITEM,
        count: 2,
        total: getSumToFixed(TEST_MENU_POSITION.price * 2),
      },
    ]);
    /** $cartWithCode is equal to $cartGrouped coz still there is no promo code **/
    expect(scope.getState($cartWithCode)).toEqual(scope.getState($cartGrouped));

    /** check promo code with discount on all menu categories **/
    await allSettled(checkPromoCodeFx, {
      params: TEST_PROMO_CODE_ALL.code,
      scope,
    });

    /** $cartWithCode applies promo code amount on every price and total sum  **/
    expect(scope.getState($cartWithCode)).toEqual([
      {
        ...TEST_CART_ITEM,
        count: 2,
        price: countTotalPriceWithCode(
          TEST_CART_ITEM.price,
          TEST_PROMO_CODE_ALL.amount
        ),
        total: countTotalPriceWithCode(
          TEST_CART_ITEM.total,
          TEST_PROMO_CODE_ALL.amount,
          2
        ),
      },
    ]);

    /** check promo code with discount only on "salads" category **/
    await allSettled(checkPromoCodeFx, {
      params: TEST_PROMO_CODE_SALADS.code,
      scope,
    });
    /**
     * $cartWithCode dynamically became equal to $cartGrouped because there are no salads in $cart,
     * so there are no products to apply discount on.
     * **/
    expect(scope.getState($cartWithCode)).toEqual(scope.getState($cartGrouped));

    /** add second unique product to cart ("salads" category) **/
    await addProductToCart(TEST_MENU_POSITION_SALAD, scope);

    /** now $cart contain 3 products **/
    expect(scope.getState($cart)).toEqual([
      TEST_CART_ITEM,
      TEST_CART_ITEM,
      TEST_CART_ITEM_SALAD,
    ]);
    /** $cartGrouped contain 2 the same soups grouped in 1 product and salad as second product **/
    expect(scope.getState($cartGrouped)).toEqual(
      [
        {
          ...TEST_CART_ITEM,
          count: 2,
          total: getSumToFixed(TEST_MENU_POSITION.price * 2),
        },
        { ...TEST_CART_ITEM_SALAD },
      ].sort((a, b) => b.id - a.id)
    );
    /** $cartWithCode applies promo code on products with category="salad"  **/
    expect(scope.getState($cartWithCode)).toEqual(
      [
        {
          ...TEST_CART_ITEM,
          count: 2,
          total: getSumToFixed(TEST_MENU_POSITION.price * 2),
        },
        {
          ...TEST_CART_ITEM_SALAD,
          price: countTotalPriceWithCode(
            TEST_CART_ITEM_SALAD.price,
            TEST_PROMO_CODE_SALADS.amount
          ),
          total: countTotalPriceWithCode(
            TEST_CART_ITEM_SALAD.total,
            TEST_PROMO_CODE_SALADS.amount
          ),
        },
      ].sort((a, b) => b.id - a.id)
    );

    /** reset cart to check if all dynamic stores will be cleared too **/
    await allSettled(resetCart, { scope });
    expect(scope.getState($cartGrouped).length).toBe(0);
    expect(scope.getState($cartWithCode).length).toBe(0);
  });

  test(`Check cart's total sum`, async () => {
    const scope = fork(root);
    const TEST_MENU_POSITION_SALAD = MOCK_MENU[5];

    expect(scope.getState($totalPrice)).toBe(0);

    await addProductToCart(TEST_MENU_POSITION, scope);
    expect(scope.getState($totalPrice)).toBe(
      getSumToFixed(TEST_MENU_POSITION.price)
    );

    await addProductToCart(TEST_MENU_POSITION_SALAD, scope);
    expect(scope.getState($totalPrice)).toBe(
      getSumToFixed(TEST_MENU_POSITION.price + TEST_MENU_POSITION_SALAD.price)
    );

    await allSettled(deleteFromCart, {
      params: TEST_CART_ITEM,
      scope,
    });
    expect(scope.getState($totalPrice)).toBe(
      getSumToFixed(TEST_MENU_POSITION_SALAD.price)
    );

    await allSettled(resetCart, { scope });
    expect(scope.getState($totalPrice)).toBe(0);
  });
});
