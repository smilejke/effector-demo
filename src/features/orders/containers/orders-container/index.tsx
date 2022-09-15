import Typography from "antd/lib/typography";

import { useOrders } from "features/orders/selectors";
import { OrderCard } from "features/orders/components/order-card";

import "./styles.css";

const { Title } = Typography;

export const OrdersContainer = () => {
  const orders = useOrders();

  return (
    <div className="order-page__container">
      <Title level={1}>Your orders</Title>
      <div className="order-page__content">
        {orders.map((order, index) => {
          return <OrderCard order={order} key={order.orderId} />;
        })}
      </div>
    </div>
  );
};
