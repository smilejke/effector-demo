import { useRef, useEffect } from "react";
import mapboxgl, { Map } from "mapbox-gl";

import "./styles.scss";

export const ShopMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  let map = useRef<Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [139.7454, 35.6586],
      zoom: 15,
    });
  }, []);

  return (
    <div className="shop-map">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
