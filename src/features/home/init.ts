import { forward, guard, sample, split } from "effector";
import {
  getAllProductsFx,
  getProductsByCategoryFx,
  selectCategory,
  setMenu,
} from "features/home/controllers";
import { $selectedCategories } from "features/home/stores";

import "./model";

/**
 * 1. FORWARD is effector's function which can be read as:
 * when FROM happens, call TO with value returned from FROM as params.
 *
 * 2. SPLIT is effector's variation of switch/case construction.
 *
 * 3. SAMPLE is effector's function which can be read as:
 * when CLOCK triggers, take value from SAMPLE and value returned from CLOCK,
 * pass them as FN's arguments and call TARGET with the value returned from FN.
 *
 * 4. GUARD is effector's function which can be read as:
 * When CLOCK triggers, check if FILTER is true and call TARGET with SOURCE as props.
 *
 * **/

forward({
  from: getProductsByCategoryFx.done.map(({ result }) => result),
  to: setMenu,
});

const getProductCategorySample = sample({
  source: $selectedCategories,
  clock: selectCategory,
  fn: (state, category) => ({
    is: state[category],
    category,
  }),
});

const getProductCategoryGuard = guard({
  source: getProductCategorySample,
  filter: (state) => !state.is,
});

const effectToUse = split(getProductCategoryGuard, {
  category: ({ category }) => category !== "all",
  all: ({ category }) => category === "all",
});

forward({
  from: effectToUse.category.map(({ category }) => category),
  to: getProductsByCategoryFx,
});

forward({
  from: effectToUse.all.map(({ category }) => category),
  to: getAllProductsFx,
});
