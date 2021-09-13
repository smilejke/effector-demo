import { createEffect, createEvent } from "effector-root";
import { TMenu, TMenuPositionCategory } from "features/home/types";
import { getProductsByCategoryRequest } from "features/home/api";

export const setMenu = createEvent<TMenu>("setMenu");

/** FAKE API TO GET MENU POSITIONS **/
export const getProductsByCategoryFx = createEffect<
  TMenuPositionCategory,
  TMenu,
  Error
>({
  handler: getProductsByCategoryRequest,
  name: "getProductsByCategoryFx",
});
