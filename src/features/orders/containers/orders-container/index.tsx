import { useOrders } from "features/orders/selectors";
import { OrderItem } from "features/orders/components/order-item";
import Typography from "antd/lib/typography";

import "./styles.scss";

const { Title } = Typography;

export const OrdersContainer = () => {
  const orders = useOrders();

  return (
    <div className="order-page__container">
      <Title level={1}>Your orders</Title>
      <div className="order-page__content">
        {orders.map((order, index) => {
          return <OrderItem order={order} key={order.orderId} />;
        })}
      </div>
    </div>
  );
};
