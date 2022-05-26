import { forward, combine, restore } from "effector";
import { createGate } from "effector-react";
import { appDomain } from "features/common/model";

import { ShopLocation } from "src/shared/types";

import * as api from "widgets/map/ShopMap/api";

const { createEvent, createStore } = appDomain;

export const mapPageGate = createGate("mapPageGate");

export const selectShopId = createEvent<string>("selectShopId");
export const resetFilter = createEvent("resetFilter");

forward({
  from: mapPageGate.open,
  to: api.getAllLocationFx,
});

export const $shopList = createStore<ShopLocation[]>([], {
  name: "$shopList",
});

$shopList.on(api.getAllLocationFx.doneData, (_, data) => data);

export const $mapboxMarkers = $shopList.map((shopList) =>
  shopList.map((shop) => ({
    id: shop.id,
    name: shop.name,
    center: [shop.location.lat, shop.location.lng] as [number, number],
  }))
);

export const $shopSelectOptions = $shopList.map((shopList) =>
  shopList.map((shop) => ({ value: shop.id, label: shop.name }))
);

export const $selectedShop = combine(
  $shopList,
  restore(selectShopId, null),
  (shopList, selectedShopId) => {
    return shopList.find((shop) => shop.id === selectedShopId) || null;
  }
);
