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

const getProductCategorySample = sample({
  source: $selectedCategories,
  clock: selectMenu.byCategories,
  fn: (state, category) => {
    return {
      is: state[category],
      category,
    };
  },
});

const getAllProductsSample = sample({
  source: $selectedCategories,
  clock: selectMenu.allMenu,
  fn: (state, category) => {
    return {
      is: state[category],
      category,
    };
  },
});

const getProductCategoryGuard = guard({
  source: getProductCategorySample,
  filter: (state) => !state.is,
});

const getAllProductsGuard = guard({
  source: getAllProductsSample,
  filter: (state) => !state.is,
});

forward({
  from: getProductCategoryGuard.map(({ category }) => category),
  to: getProductsByCategoryFx,
});

forward({
  from: getAllProductsGuard.map(({ category }) => category),
  to: getAllProductsFx,
});
