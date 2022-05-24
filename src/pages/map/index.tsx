import { FC } from "react";
import { useGate } from "effector-react";

import { GeneralTemplate } from "templates/general-template";
import { ShopMap } from "widgets/map/ShopMap/ui";

import {
  useMapFetching,
  useSelectedShop,
  useShopOptions,
} from "pages/map/selectors";

import { mapPageGate, selectShopId } from "./model";
import "./model";

export const MapPage: FC = () => {
  useGate(mapPageGate);
  const shopOptions = useShopOptions();
  const loading = useMapFetching();
  const selectedShop = useSelectedShop();

  return (
    <>
      <GeneralTemplate>
        <ShopMap
          shopOptions={shopOptions}
          loading={loading}
          selectedShop={selectedShop}
          onSelectShop={selectShopId}
        />
      </GeneralTemplate>
    </>
  );
};
