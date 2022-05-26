import { FC, useEffect, useRef } from "react";
import { Spin } from "antd";

import { Mapbox } from "entities/map/mapbox";
import { FilterMapCard } from "entities/map/FilterMapCard";
import { SelectedShopCard } from "entities/map/SelectedShopCard";
import { ShopLocation } from "src/shared/types";

import { setMapboxInstance, setMarkersToMapbox, zoomedMapbox } from "../model";
import { useMapboxConfig } from "../model/selectors";

import "../model";

import "./styles.scss";

interface ShopMapProps {
  shopOptions: { value: string; label: string }[];
  loading: boolean;
  selectedShop: ShopLocation | null;
  onSelectShop: (shopId: string) => void;
  markers?: { center: [number, number]; name: string; id: string }[];
}

export const ShopMap: FC<ShopMapProps> = ({
  shopOptions,
  loading,
  selectedShop,
  onSelectShop,
  markers = [],
}) => {
  const config = useMapboxConfig();
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (config.instance) return;
    setMapboxInstance(mapContainer.current as HTMLElement);
  }, [config.instance]);

  useEffect(() => {
    setMarkersToMapbox(markers);
  }, [markers]);

  const handleZoomIn = () => {
    zoomedMapbox(config.zoom + 1);
  };

  const handleZoomOut = () => {
    zoomedMapbox(config.zoom - 1);
  };

  return (
    <div className="shops-container">
      <Mapbox
        ref={mapContainer}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        config={config}
        markers={markers}
      />
      <Spin spinning={loading}>
        <aside className="shops-sidebar">
          <FilterMapCard
            options={shopOptions}
            selectedId={selectedShop?.id}
            onChange={onSelectShop}
          />
          <SelectedShopCard data={selectedShop} />
        </aside>
      </Spin>
    </div>
  );
};
