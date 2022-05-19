import { FC } from "react";

import { Map } from "entities/map/ui";

import { Aside } from "../Aside";

import './styles.scss';

export const ShopMapsContainer: FC = () => {
  return (
    <div className="shops-container">
      <Map />
      <Aside />
    </div>
  );
};
