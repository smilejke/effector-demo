import { createStore, combine } from "effector-root";
import { TMenu } from "features/home/types";
import {
  getAllProductsFx,
  getProductsByCategoryFx,
} from "features/home/controllers";

/**
 * store to keep all downloaded menu positions
 * **/
export const $menu = createStore<TMenu>([], { name: "$menu" });

/**
 * store to add a category as field and "true" as value to check if category
 * was downloaded and prevent new requests (cache)
 * **/
export const $selectedCategories = createStore<Record<string, boolean>>(
  {},
  { name: "$selectedCategories" }
);

/**
 * store to keep selected menu category to show
 * **/
export const $selectedCategory = createStore<string>("", {
  name: "$selectedCategory",
});

/**
 * store based on 2 another stores to show only products by selected category
 * and keep $menu without changes. This store is used on react side to render menu cards on home page.
 * **/
export const $products = combine($menu, $selectedCategory, (menu, category) => {
  if (category === "all") {
    return menu.sort((a, b) => b.category.localeCompare(a.category));
  }
  return menu
    .filter((item) => item.category === category)
    .sort((a, b) => b.category.localeCompare(a.category));
});

/**
 * store based on effects pending to show loader on react side while requests are fetching
 * **/
export const $isMenuPending = combine(
  getAllProductsFx.pending,
  getProductsByCategoryFx.pending,
  (all, categories) => [all, categories].some(Boolean)
);
