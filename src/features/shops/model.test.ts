import { allSettled, fork } from "effector";

import { appDomain } from "features/common/model";
import { $mapbox, changedMapbox, zoomedMapbox } from "features/shops/model";

describe("Widget map flow", () => {
  it("store mapbox should contain all properties", async () => {
    const scope = fork(appDomain);

    const mapState = scope.getState($mapbox);
    expect(mapState).toHaveProperty("coords");
    expect(mapState).toHaveProperty("style");
    expect(mapState).toHaveProperty("zoom");
    expect(mapState).toHaveProperty("container");
    expect(mapState).toHaveProperty("instance");
  });

  it("should change mapbox coords", async () => {
    const scope = fork(appDomain);
    await allSettled(changedMapbox, {
      scope,
      params: {
        lat: 55.75,
        lng: 37.57,
      }
    });

    const mapState = scope.getState($mapbox);
    expect(mapState.coords).toEqual({
      lat: 55.75,
      lng: 37.57,
    });
  })

  it("should change mapbox zoom", async () => {
    const scope = fork(appDomain);
    await allSettled(zoomedMapbox, {
      scope,
      params: 3 
    });

    const mapState = scope.getState($mapbox);
    expect(mapState.zoom).toEqual(3);
  })
});
