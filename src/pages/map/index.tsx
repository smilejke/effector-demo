import { FC } from 'react';

import { ShopMapsContainer } from "features/map/containers/ShopMapsContainer";

import { GeneralTemplate } from "templates/general-template";

export const MapPage: FC = () => {
  return (
    <>
      <GeneralTemplate>
        <ShopMapsContainer />
      </GeneralTemplate>
    </>
  );
};
