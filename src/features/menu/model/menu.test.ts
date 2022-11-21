import { allSettled, fork } from "effector";
import {
  getAllProductsFx,
  getProductsByCategoryFx,
  selectCategory,
} from "features/menu/model/controllers";
import { $menu, $products, $cachedCategories } from "features/menu/model/stores";
import { MOCK_MENU } from "mocks/menu";
import { menuDomain } from "./domain";

import "./model";
import "./init";

describe("Menu flow", () => {
  const getProducts = (category: string) => {
    return MOCK_MENU.filter((item) => item.category === category);
  };

  test("Set menu and cache it", async () => {
    const scope = fork(menuDomain);

    await allSettled(getAllProductsFx, {
      params: "all",
      scope,
    });

    expect(scope.getState($menu)).toEqual(MOCK_MENU);
    expect(scope.getState($cachedCategories)).toEqual({
      soups: true,
      salads: true,
      burgers: true,
      all: true,
    });
  });

  test("Get products by selected categories and cache it", async () => {
    const scope = fork(menuDomain);

    const getProductsByCategoryReq = async (category: string) => {
      return await allSettled(getProductsByCategoryFx, {
        params: category,
        scope,
      });
    };

    /** 1. request on burgers, put response in $menu store and cache it in $cachedCategories **/
    await getProductsByCategoryReq("burgers");
    expect(scope.getState($menu)).toEqual(getProducts("burgers"));
    expect(scope.getState($cachedCategories)).toEqual({
      burgers: true,
    });

    /** 2. request on salads, push response to $menu store and cache salads in $cachedCategories
     *  with burgers.
     * **/
    await getProductsByCategoryReq("salads");
    expect(scope.getState($menu)).toEqual([
      ...getProducts("burgers"),
      ...getProducts("salads"),
    ]);
    expect(scope.getState($cachedCategories)).toEqual({
      burgers: true,
      salads: true,
    });

    /** 3. request on soups, push response to $menu store and cache salads in $cachedCategories
     *  with burgers and salads (+ add {"all": true} because 3/3 categories were downloaded).
     * **/
    await getProductsByCategoryReq("soups");
    expect(scope.getState($menu)).toEqual([
      ...getProducts("burgers"),
      ...getProducts("salads"),
      ...getProducts("soups"),
    ]);
    expect(scope.getState($cachedCategories)).toEqual({
      burgers: true,
      salads: true,
      soups: true,
      all: true,
    });
  });

  test("Check if $products store builds correct", async () => {
    const scope = fork(menuDomain);

    /**
     * $products is based on $menu and $selectedCategory, so until they are empty/not selected,
     * $products should be empty.
     * **/
    expect(scope.getState($products).length).toBe(0);

    /** select "salads" and create $products based on $menu and $selectedCategory **/
    await allSettled(selectCategory, {
      params: "salads",
      scope,
    });
    expect(scope.getState($menu)).toEqual(getProducts("salads"));
    expect(scope.getState($products)).toEqual(getProducts("salads"));

    /** select "all" and create $products based on $menu and $selectedCategory **/
    await allSettled(selectCategory, {
      params: "all",
      scope,
    });
    expect(scope.getState($menu)).toEqual(MOCK_MENU);
    expect(scope.getState($products)).toEqual(MOCK_MENU);
  });
});
