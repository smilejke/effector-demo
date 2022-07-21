import { useStore } from "effector-react";

import * as api from "features/shops/api";
import * as model from "./model";

export const useMapFetching = () => {
  return useStore(api.getAllLocationFx.pending);
};

export const useShopOptions = () => {
  return useStore(model.$shopSelectOptions);
};

export const useShopMarkers = () => {
  return useStore(model.$mapboxMarkers);
};

export const useSelectedShop = () => {
  return useStore(model.$selectedShop);
};
