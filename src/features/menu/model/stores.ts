import { combine } from "effector-root";
import { TMenu } from "features/menu/types";
import {
  getAllProductsFx,
  getProductsByCategoryFx,
} from "features/menu/model/controllers";

import { menuDomain } from './domain'

const { createStore } = menuDomain

/**
 * Store to keep all downloaded menu positions.
 * **/
export const $menu = createStore<TMenu>([], { name: "$menu" });

/**
 * Store to add a category in {[category]: true} format to check if category
 * was downloaded and prevent the same requests (cache).
 * **/
export const $selectedCategories = createStore<Record<string, boolean>>(
  {},
  { name: "$selectedCategories" }
);

/**
 * Store to keep selected menu category to show.
 * **/
export const $selectedCategory = createStore<string>("", {
  name: "$selectedCategory",
});

/**
 * Store based on 2 another stores to show only products by selected category
 * and keep $menu without changes. This store is used on react side to render menu cards on menu page.
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
 * Store based on effects pending to show loader on react side while selected requests are fetching.
 * This store is used on react to render loader until content downloaded.
 * **/
export const $isMenuPending = combine(
  getAllProductsFx.pending,
  getProductsByCategoryFx.pending,
  (all, categories) => [all, categories].some(Boolean)
);
