import { createEffect } from "effector";

import { SHOP_ITEM_LOCATIONS } from "mocks/map";
import { ShopLocation } from "src/shared/types";

/** FAKE API TO GET SHOP LOCATIONS **/
export const getShopListRequest = (): Promise<ShopLocation[]> =>
  new Promise((res) => {
    setTimeout(() => {
      return res(SHOP_ITEM_LOCATIONS);
    }, 200);
  });


export const getAllLocationFx = createEffect<void, ShopLocation[], Error>('getAllLocationFx').use(getShopListRequest);
