import { useStore } from "effector-react";

import { $mapbox } from "widgets/map/ShopMap/model";

export const useMapboxConfig = () => {
  return useStore($mapbox);
};
