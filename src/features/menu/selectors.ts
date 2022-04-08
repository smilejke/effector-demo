import { useStore } from "effector-react";
import { $isMenuPending, $products } from "features/menu/model/stores";

import { TMenu } from "features/menu/types";

export const useProducts = (): TMenu => {
  return useStore($products);
};

export const useMenuFetching = (): boolean => {
  return useStore($isMenuPending);
};
