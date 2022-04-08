import { ShopMapsContainer } from "features/map/container/ShopMapsContainer";
import { GeneralTemplate } from "templates/general-template";

export const MapPage = () => {
  return (
    <>
      <GeneralTemplate>
        <ShopMapsContainer />
      </GeneralTemplate>
    </>
  );
};
