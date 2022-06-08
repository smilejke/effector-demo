import { FC, useRef } from "react";
import { Spin } from "antd";

import { Mapbox } from "entities/map/mapbox";
import { FilterMapCard } from "entities/map/FilterMapCard";
import { SelectedShopCard } from "entities/map/SelectedShopCard";
import { ShopLocation } from "src/shared/types";

import { changedMapbox, zoomedMapbox } from "../model";
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
  const mapContainer = useRef<any | null>(null);

  const handleZoomIn = () => {
    zoomedMapbox(config.zoom + 1);
  };

  const handleZoomOut = () => {
    zoomedMapbox(config.zoom - 1);
  };

  const handleSelectShop = (shopId: string) => {
    onSelectShop(shopId);
  };

  return (
    <div className="shops-container">
      <Mapbox
        ref={mapContainer}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        config={config}
        onMarkerClick={onSelectShop}
        markers={markers}
        onMove={({ latitude, longitude, zoom }) =>
          changedMapbox({ zoom, lat: latitude, lng: longitude })
        }
      />
      <Spin spinning={loading}>
        <aside className="shops-sidebar">
          <FilterMapCard
            options={shopOptions}
            selectedId={selectedShop?.id}
            onChange={handleSelectShop}
          />
          {selectedShop && <SelectedShopCard data={selectedShop} />}
        </aside>
      </Spin>
    </div>
  );
};
