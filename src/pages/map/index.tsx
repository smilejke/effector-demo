import { FC } from "react";
import { useGate } from "effector-react";

import { GeneralTemplate } from "templates/general-template";
import { ShopMap } from "features/shops/components/map";

import {
  useMapFetching,
  useSelectedShop,
  useShopMarkers,
  useShopOptions,
} from "pages/map/selectors";

import { mapPageGate, selectShopId } from "./model";
import "./model";

export const MapPage: FC = () => {
  useGate(mapPageGate);
  const shopOptions = useShopOptions();
  const loading = useMapFetching();
  const selectedShop = useSelectedShop();
  const markers = useShopMarkers();

  return (
    <>
      <GeneralTemplate>
        <ShopMap
          shopOptions={shopOptions}
          loading={loading}
          selectedShop={selectedShop}
          onSelectShop={selectShopId}
          markers={markers}
        />
      </GeneralTemplate>
    </>
  );
};
