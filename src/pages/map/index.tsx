import { ShopMapsContainer } from "features/map/containers/ShopMapsContainer";
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
