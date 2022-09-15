import { forwardRef } from "react";
import { Button } from "antd";
import Map, { Marker, ViewStateChangeEvent } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import "./styles.css";

interface MapboxProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  config?: {
    zoom: number;
    coords: { lng: number, lat: number };
    container: string | null;
    style: string;
    instance: mapboxgl.Map | null;
  };
  markers?: { coords: { lat: number, lng: number }; name: string; id: string }[];
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
          Longitude: {config?.coords.lng} | Latitude: {config?.coords.lat} | Zoom:
          {config?.zoom}
        </div>
        <div ref={mapContainerRef} className="map-container" />
        <Map
          initialViewState={{
            longitude: config?.coords.lng ?? 0,
            latitude: config?.coords.lat ?? 0,
            zoom: config?.zoom ?? 0,
          }}
          longitude={config?.coords.lng ?? 0}
          latitude={config?.coords.lat ?? 0}
          zoom={config?.zoom ?? 0}
          onMove={handleMove}
          mapStyle={config?.style ?? "mapbox://styles/mapbox/streets-v11"}
        >
          <div id="coordinates" className="coordinates">
            {markers?.map(({ coords, id }) => (
              <Marker
                key={id}
                longitude={coords.lng}
                latitude={coords.lat}
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
