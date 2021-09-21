import { createEffect, createEvent } from "effector-root";
import { TMenu } from "features/home/types";
import { getProductsByCategoryRequest } from "features/home/api";

export const setMenu = createEvent<TMenu>("setMenu");

export const selectCategory = createEvent<string>("selectCategory");

/** FAKE API TO GET MENU BY SELECTED CATEGORY **/
export const getProductsByCategoryFx = createEffect<string, TMenu, Error>({
  handler: getProductsByCategoryRequest,
  name: "getProductsByCategoryFx",
});

/** FAKE API TO GET ALL MENU **/
export const getAllProductsFx = createEffect<string, TMenu, Error>({
  handler: getProductsByCategoryRequest,
  name: "getProductsByCategoryFx",
});
