import { useStore } from "effector-react";
import { $menu, $selectedCategory } from "features/home/stores";
import { TMenu, TMenuPositionCategory } from "features/home/types";

export const useMenu = (): TMenu => {
  return useStore($menu);
};

export const useSelectedMenuCategory = (): TMenuPositionCategory => {
  return useStore($selectedCategory);
};
