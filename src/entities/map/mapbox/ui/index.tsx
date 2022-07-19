import { forwardRef } from "react";
import { Button } from "antd";
import Map, { Marker, ViewStateChangeEvent } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import "./styles.scss";

interface MapboxProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  config?: {
    zoom: number;
    center: [number, number];
    container: string | null;
    style: string;
    instance: mapboxgl.Map | null;
  };
  markers?: { center: [number, number]; name: string; id: string }[];
  onMarkerClick?: (id: string) => void;
  onMove?: (props: { latitude: number; longitude: number, zoom: number }) => void;
}

export const Mapbox = forwardRef<HTMLDivElement, MapboxProps>(
  (
    { onZoomIn, onZoomOut, onMove, config, markers, onMarkerClick },
    mapContainerRef
  ) => {
    const handleZoomIn = () => {
      onZoomIn?.();
    };

    const handleZoomOut = () => {
      onZoomOut?.();
    };

    const handleMove = (e: ViewStateChangeEvent) => {
      const latitude = e.viewState.latitude;
      const longitude = e.viewState.longitude;
      onMove?.({ latitude, longitude, zoom: e.viewState.zoom });
    };

    return (
      <div className="shop-map">
        <div className="sidebar">
          Longitude: {config?.center[1]} | Latitude: {config?.center[0]} | Zoom:
          {config?.zoom}
        </div>
        <div ref={mapContainerRef} className="map-container" />
        <Map
          initialViewState={{
            longitude: config?.center[0] ?? 0,
            latitude: config?.center[1] ?? 0,
            zoom: config?.zoom ?? 0,
          }}
          longitude={config?.center[0] ?? 0}
          latitude={config?.center[1] ?? 0}
          zoom={config?.zoom ?? 0}
          onMove={handleMove}
          mapStyle={config?.style ?? "mapbox://styles/mapbox/streets-v11"}
        >
          <div id="coordinates" className="coordinates">
            {markers?.map(({ center, id }) => (
              <Marker
                key={id}
                longitude={center[1]}
                latitude={center[0]}
                onClick={() => onMarkerClick?.(id)}
              />
            ))}
          </div>
        </Map>

        <div className="zoom-buttons">
          <Button onClick={handleZoomIn}>Zoom In</Button>
          <Button onClick={handleZoomOut}>Zoom Out</Button>
        </div>
      </div>
    );
  }
);
