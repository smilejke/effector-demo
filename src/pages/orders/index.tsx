import { GeneralTemplate } from "templates/general-template";
import { OrdersContainer } from "features/orders/containers/orders-container";

export const OrdersPage = () => {
  return (
    <GeneralTemplate selectedMenu="status">
      <OrdersContainer />
    </GeneralTemplate>
  );
};
