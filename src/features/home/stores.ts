import { createStore, combine } from "effector-root";
import { TMenu } from "features/home/types";
import {
  getAllProductsFx,
  getProductsByCategoryFx,
} from "features/home/controllers";

export const $menu = createStore<TMenu>([], { name: "$menu" });

export const $selectedCategories = createStore<Record<string, boolean>>(
  {},
  { name: "$selectedCategories" }
);

export const $selectedCategory = createStore<string>("", {
  name: "$selectedCategory",
});

export const $products = combine($menu, $selectedCategory, (menu, category) => {
  if (category === "all") return menu;
  return menu.filter((item) => item.category === category);
});

export const $isMenuPending = combine(
  getAllProductsFx.pending,
  getProductsByCategoryFx.pending,
  (all, categories) => [all, categories].some(Boolean)
);
