import { TMenu, TSelectProduct } from "features/menu/types";
import { getProductsByCategoryRequest } from "features/menu/api";

import { menuDomain } from './domain'

const { createEffect, createEvent } = menuDomain

/** replace $menu with new data **/
export const setMenu = createEvent<TMenu>("setMenu");

/** select menu category (string) **/
export const selectCategory = createEvent<string>("selectCategory");

/** FAKE API TO GET MENU BY SELECTED CATEGORY **/
export const getProductsByCategoryFx = createEffect<string, TMenu, Error>({
  handler: getProductsByCategoryRequest,
  name: "getProductsByCategoryFx",
});

/** FAKE API TO GET ALL MENU POSITIONS **/
export const getAllProductsFx = createEffect<string, TMenu, Error>({
  handler: getProductsByCategoryRequest,
  name: "getAllProductsFx",
});

/** select product to make actions with $cart in { id: productId, action: "add" / "remove" } format **/
export const selectProduct = createEvent<TSelectProduct>("selectProduct");
