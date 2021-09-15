import { forward, guard, sample, split } from "effector";
import {
  getAllProductsFx,
  getProductsByCategoryFx,
  selectCategory,
  setMenu,
} from "features/home/controllers";
import { $selectedCategories } from "features/home/stores";

import "./model";

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
  clock: [selectMenu.byCategories, selectMenu.allMenu],
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

const effectTuUse = split(getProductCategoryGuard, {
  category: ({ category }) => category !== "all",
  all: ({ category }) => category === "all",
});

forward({
  from: effectTuUse.category.map(({ category }) => category),
  to: getProductsByCategoryFx,
});

forward({
  from: effectTuUse.all.map(({ category }) => category),
  to: getAllProductsFx,
});
