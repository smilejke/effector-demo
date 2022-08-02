import { allSettled, fork } from "effector";

import { appDomain } from "features/common/model";
import { ShopLocation } from "src/shared/types";
import { getAllLocationFx } from "features/shops/api";
import {
  $mapboxMarkers,
  $selectedShop,
  $shopList,
  $shopSelectOptions,
  selectShopId,
} from "./model";

describe("Map of shops flow", () => {
  it("should return shops", async () => {
    const scope = fork(appDomain);
    const shops = await allSettled(getAllLocationFx, {
      scope,
    });
    expect(shops.status).toBe("done");
    expect(Array.isArray(shops.value)).toBe(true);
    const values = shops.value as ShopLocation[];
    const shop = values[0];
    expect(shop).toHaveProperty("id");
    expect(shop).toHaveProperty("location");
    expect(shop).toHaveProperty("name");
    expect(shop).toHaveProperty("address");
    expect(shop).toHaveProperty("picture");
  });

  it("should full $shopList store after getting shops list request", async () => {
    const scope = fork(appDomain);
    const shops = await allSettled(getAllLocationFx, {
      scope,
    });

    expect(scope.getState($shopList)).toEqual(shops.value);
  });

  it("should return selected shop", async () => {
    const scope = fork(appDomain);
    const shops = await allSettled(getAllLocationFx, {
      scope,
    });

    await allSettled(selectShopId, {
      scope,
      params: "1",
    });

    const values = shops.value as ShopLocation[];
    const shop = values[0];
    expect(scope.getState($selectedShop)).toEqual(shop);
  });

  it("should return markers", async () => {
    const scope = fork(appDomain);
    await allSettled(getAllLocationFx, {
      scope,
    });

    const markers = scope.getState($mapboxMarkers);
    expect(Array.isArray(markers)).toEqual(true);
    expect(markers.length).toBeGreaterThan(0);

    const marker = markers[0];
    expect(marker).toHaveProperty("id");
    expect(marker).toHaveProperty("coords");
    expect(marker).toHaveProperty("name");
  });

  it ("should return options for shop select", async () => {
    const scope = fork(appDomain);
    await allSettled(getAllLocationFx, {
      scope,
    });

    const options = scope.getState($shopSelectOptions);
    expect(Array.isArray(options)).toEqual(true);
    expect(options.length).toBeGreaterThan(0);

    const option = options[0];
    expect(option).toHaveProperty("value");
    expect(option).toHaveProperty("label");
  })
});
