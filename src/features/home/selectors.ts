import { useStore } from "effector-react";
import { $isMenuPending, $products } from "features/home/stores";

import { TMenu } from "features/home/types";

export const useProducts = (): TMenu => {
  return useStore($products);
};

export const useGetMenuFetching = (): boolean => {
  return useStore($isMenuPending);
};
