import { useStore } from "effector-react";
import { $mapbox } from "./mapbox/model";

export const useMapboxConfig = () => {
  return useStore($mapbox);
};
