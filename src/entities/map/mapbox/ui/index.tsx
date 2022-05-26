import { forwardRef } from "react";
import { Button } from "antd";

import { Marker } from "./marker";

import 'mapbox-gl/dist/mapbox-gl.css';

import "./styles.scss";

interface MapboxProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  config?: {
    zoom: number;
    center: [number, number];
    container: HTMLElement | null;
    style: string;
    instance: mapboxgl.Map | null;
  };
  markers?: { center: [number, number]; name: string; id: string }[];
}

export const Mapbox = forwardRef<HTMLDivElement, MapboxProps>(
  ({ onZoomIn, onZoomOut, config, markers }, mapContainerRef) => {
    const handleZoomIn = () => {
      onZoomIn?.();
    };

    const handleZoomOut = () => {
      onZoomOut?.();
    };

    return (
      <div className="shop-map">
        <div className="sidebar">
          Longitude: {config?.center[1]} | Latitude: {config?.center[0]} | Zoom:
          {config?.zoom}
        </div>
        <div ref={mapContainerRef} className="map-container" />
        <pre id="coordinates" className="coordinates">
          {markers?.map(({ center, name, id }) => (
            <Marker key={id} center={center} id={id} name={name} />
          ))}
        </pre>
        <div className="zoom-buttons">
          <Button onClick={handleZoomIn}>Zoom In</Button>
          <Button onClick={handleZoomOut}>Zoom Out</Button>
        </div>
      </div>
    );
  }
);
