import { allSettled, fork, root } from "effector-root";
import { addToCart, deleteFromCart } from "./controllers";
import { $cart } from "./stores";
import "./model";

describe("Cart flow", () => {
  const testProduct = {
    category: "soups",
    count: 1,
    description:
      "280г, куриное филе, бекон, ветчина, маринованные огурцы, лук, каперсы, маслины, лимон, сметана",
    id: 885999064,
    price: 6.7,
    src: "/static/media/soup1.4b6df3a1.jpeg",
    title: "Солянка",
  };

  test("Add product to cart from menu", async () => {
    const scope = fork(root);
    await allSettled(addToCart, {
      params: testProduct,
      scope,
    });
    expect(scope.getState($cart)).toEqual([
      { ...testProduct, total: testProduct.price },
    ]);
  });
  test("Remove product from cart", async () => {
    const scope = fork(root);
    await allSettled(addToCart, {
      params: testProduct,
      scope,
    });

    expect(scope.getState($cart).length).toBe(1);

    await allSettled(deleteFromCart, {
      params: testProduct,
      scope,
    });

    expect(scope.getState($cart)).toEqual([]);
  });
});
