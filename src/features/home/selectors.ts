import { useStore } from "effector-react";
import { $menu } from "features/home/stores";
import { getProductsByCategoryFx } from "features/home/controllers";

import { TMenu } from "features/home/types";

export const useMenu = (): TMenu => {
  return useStore($menu);
};

export const useGetMenuFetching = (): boolean => {
  return useStore(getProductsByCategoryFx.pending);
};
