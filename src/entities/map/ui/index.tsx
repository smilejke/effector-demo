import { useRef, useEffect } from "react";

import { setMapboxInstance, zoomedMapbox } from "entities/map/model/mapbox/model";
import { useMapboxConfig } from "entities/map/model/selectors";
import { ZoomButtons } from "./ZoomButtons";

import "entities/map/model/model";

import "./styles.scss";

export const Map = () => {
  const config = useMapboxConfig();
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (config.instance) return;
    setMapboxInstance(mapContainer.current as HTMLElement);
  }, [config.instance]);

  const handleZoomIn = () => {
    zoomedMapbox(config.zoom + 1);
  }

  const handleZoomOut = () => {
    zoomedMapbox(config.zoom - 1);
  }

  return (
    <div className="shop-map">
      <div className="sidebar">
        Longitude: {config.center[1]} | Latitude: {config.center[0]} | Zoom:{" "}
        {config.zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      <ZoomButtons onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
    </div>
  );
};
