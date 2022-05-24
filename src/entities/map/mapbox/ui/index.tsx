import { forwardRef, FC } from "react";
import { Button } from "antd";

import "./styles.scss";

interface MapboxProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  config?: {
    zoom: number;
    center: [number, number];
  };
  
}

export const Mapbox = forwardRef<HTMLDivElement, MapboxProps>(
  ({ onZoomIn, onZoomOut, config }, mapContainerRef) => {
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
        <div className="zoom-buttons">
          <Button onClick={handleZoomIn}>Zoom In</Button>
          <Button onClick={handleZoomOut}>Zoom Out</Button>
        </div>
      </div>
    );
  }
);
