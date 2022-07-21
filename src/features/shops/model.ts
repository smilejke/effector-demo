import mapboxgl from "mapbox-gl";

import { appDomain } from "features/common/model";

const { createStore, createEvent } = appDomain;

export const changedMapbox =
  createEvent<{ zoom?: number; lat?: number; lng?: number }>("changedMapbox");

export const zoomedMapbox = createEvent<number>("zoomedMapbox");

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string;

// create store for Mapbox
export const $mapbox = createStore<{
  coords: { lng: number, lat: number };
  zoom: number;
  container: string | null;
  style: string;
  instance: mapboxgl.Map | null;
}>(
  {
    coords: { lng: 23.851442, lat: 53.683851 },
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 12,
    container: null,
    instance: null,
  },
  {
    name: "$mapbox",
  }
);

// chaining events to $mapbox store
$mapbox
  .on(changedMapbox, (state, { lat, lng, ...rest }) => ({
    ...state,
    ...rest,
    coords: { lng: lng ?? state.coords.lng, lat: lat ?? state.coords.lat },
  }))
  .on(zoomedMapbox, (state, payload) => {
    if (payload < state.zoom) {
      state.instance?.zoomOut();
    }

    if (payload > state.zoom) {
      state.instance?.zoomIn();
    }
    return { ...state, zoom: payload };
  });
