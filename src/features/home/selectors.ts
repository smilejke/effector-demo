import { useStore } from "effector-react";
import { $menu } from "features/home/stores";
import { TMenu } from "features/home/types";

export const useMenu = (): TMenu => {
  return useStore($menu);
};
