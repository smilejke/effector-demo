import { forward, guard, sample, split } from "effector";
import {
  getAllProductsFx,
  getProductsByCategoryFx,
  selectCategory,
  setMenu,
} from "features/home/controllers";

import "./model";
import { $selectedCategories } from "features/home/stores";

forward({
  from: getProductsByCategoryFx.done.map(({ result }) => result),
  to: setMenu,
});

const selectMenu = split(selectCategory, {
  allMenu: (payload) => payload === "all",
  byCategories: (payload) => payload !== "all",
});

const getProductsSample = sample({
  source: $selectedCategories,
  clock: selectMenu.byCategories,
  fn: (state, category) => {
    return {
      is: state[category],
      category,
    };
  },
});

forward({
  from: selectMenu.allMenu,
  to: getAllProductsFx,
});

const getProductsGuard = guard({
  source: getProductsSample,
  filter: (state) => !state.is,
});

forward({
  from: getProductsGuard.map(({ category }) => category),
  to: getProductsByCategoryFx,
});
