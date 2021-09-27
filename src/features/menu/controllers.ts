import { createEffect, createEvent } from "effector-root";
import { TMenu } from "features/menu/types";
import { getProductsByCategoryRequest } from "features/menu/api";

/** replace $menu with new data **/
export const setMenu = createEvent<TMenu>("setMenu");

/** select menu category (string) **/
export const selectCategory = createEvent<string>("selectCategory");

/** set {[category]: true} to $selectedCategories store after category selected
 * and products were downloaded first time
 * **/
export const setSelectedCategories = createEvent<Record<string, boolean>>(
  "setSelectedCategories"
);

/** FAKE API TO GET MENU BY SELECTED CATEGORY **/
export const getProductsByCategoryFx = createEffect<string, TMenu, Error>({
  handler: getProductsByCategoryRequest,
  name: "getProductsByCategoryFx",
});

/** FAKE API TO GET ALL MENU POSITIONS **/
export const getAllProductsFx = createEffect<string, TMenu, Error>({
  handler: getProductsByCategoryRequest,
  name: "getProductsByCategoryFx",
});
