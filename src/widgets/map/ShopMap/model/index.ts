import mapboxgl, { Map } from "mapbox-gl";

import { appDomain } from "features/common/model";

const { createStore, createEvent } = appDomain;

export const changedMapbox =
  createEvent<{ zoom: number; lat: number; lng: number }>("changedMapbox");

export const zoomedMapbox = createEvent<number>("zoomedMapbox");
export const setMarkersToMapbox =
  createEvent<{ center: [number, number]; name: string; id: string }[]>(
    "setMarkersToMapbox"
  );

export const setMapboxInstance = createEvent<HTMLElement>("setMapboxInstance");

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string;

// create store for Mapbox
export const $mapbox = createStore<{
  center: [number, number];
  zoom: number;
  container: HTMLElement | null;
  style: string;
  instance: mapboxgl.Map | null;
}>(
  {
    center: [23.851442, 53.683851],
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 12,
    container: null,
    instance: null,
  },
  {
    name: "$mapbox",
  }
);

// set listeners for Mapbox
function setMapboxInstanceHandler(instance: Map) {
  instance.on("move", () => {
    const center = [
      instance?.getCenter().lat || 0,
      instance?.getCenter().lng || 0,
    ];
    const zoom = instance?.getZoom() || 0;
    changedMapbox({
      zoom,
      lat: center[0],
      lng: center[1],
    });
  });
}

// chaining events to $mapbox store
$mapbox
  .on(setMapboxInstance, (state, container) => {
    state.instance = new mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/streets-v11",
      center: state.center,
      zoom: state.zoom,
    });

    state.container = container;

    setMapboxInstanceHandler(state.instance);

    return state;
  })
  .on(changedMapbox, (state, { zoom, lat, lng }) => ({
    ...state,
    zoom,
    center: [lat, lng],
  }))
  .on(zoomedMapbox, (state, payload) => {
    if (payload < state.zoom) {
      state.instance?.zoomOut();
    }

    if (payload > state.zoom) {
      state.instance?.zoomIn();
    }
    return { ...state, zoom: payload };
  }).on(setMarkersToMapbox, (state, payload) => {
    if (state.instance === null) return;

    payload.forEach((marker) => {
      const markerInstance = new mapboxgl.Marker({
        draggable: false,
      })
        .setLngLat([marker.center[1], marker.center[0]])
        .addTo(state.instance as Map);

      // markerInstance.setPopup(
      //   new mapboxgl.Popup({
      //     offset: 25,
      //   })
      //     .setHTML(`<h3>${marker.name}</h3>`)
      //     .setLngLat([marker.center[1], marker.center[0]])
      // );
    })
  })
