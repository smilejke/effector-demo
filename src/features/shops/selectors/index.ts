import { useStore } from "effector-react";

import { $mapbox } from "features/shops/model";

export const useMapboxConfig = () => {
  return useStore($mapbox);
};
