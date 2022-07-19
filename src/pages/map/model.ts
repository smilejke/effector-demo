import { forward, combine, restore, sample } from "effector";
import { createGate } from "effector-react";

import * as api from "widgets/map/ShopMap/api";
import { changedMapbox } from "widgets/map/ShopMap/model";

import { appDomain } from "features/common/model";

import { ShopLocation } from "src/shared/types";


const { createEvent, createStore } = appDomain;

export const mapPageGate = createGate("mapPageGate");

export const selectShopId = createEvent<string>("selectShopId");
export const resetFilter = createEvent("resetFilter");

export const $shopList = createStore<ShopLocation[]>([], {
  name: "$shopList",
});

$shopList.on(api.getAllLocationFx.doneData, (_, data) => data);

export const $mapboxMarkers = $shopList.map((shopList) =>
  shopList.map((shop) => ({
    id: shop.id,
    name: shop.name,
    coords: { lat: shop.location.lat, lng: shop.location.lng } as { lat: number, lng: number },
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

forward({
  from: mapPageGate.open,
  to: api.getAllLocationFx,
});

sample({
  source: $shopList,
  clock: selectShopId,
  fn: (shops, selectedShopId) => {
    const target = shops.find((shop) => shop.id === selectedShopId);
    return {
      lat: target?.location.lat || 0,
      lng: target?.location.lng || 0,
    }
  },
  target: changedMapbox,
})
