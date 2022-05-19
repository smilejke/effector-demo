import { FC } from "react";

import { CityFilterCard } from "./CityFilterCard";
import { SelectedShopCard } from "./SelectedShopCard";

import "./styles.scss";

export const Aside: FC = () => {
  return (
    <aside className="map-aside">
      <CityFilterCard />
      <SelectedShopCard />
      <div>Reset button</div>
    </aside>
  );
};
