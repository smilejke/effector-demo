import { FC } from "react";
import Typography from "antd/lib/typography";

import { TOrder } from "features/orders/types";

import "./styles.scss";

const { Title, Paragraph, Text } = Typography;

interface OrderItemProps {
  order: TOrder;
}

export const OrderItem: FC<OrderItemProps> = ({ order }) => {
  const date = new Intl.DateTimeFormat([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(order.date);

  return (
    <div className="order-item__container">
      <div className="order-item__header">
        <Title level={4} style={{ marginBottom: "0", color: "#1890ff" }}>
          Order № {order.orderId}
        </Title>
        <Text type="secondary">{date}</Text>
      </div>
      <div className="order-item__content">
        <ul>
          {order.cart.map((pos) => (
            <li key={pos.id}>
              <Text>{pos.title}</Text>
              <Text>{pos.count}шт</Text>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-item__footer">
        <Paragraph strong>Total: {order.total} BYN</Paragraph>
        <Paragraph strong>
          Order status: <Text code>{order.status}</Text>
        </Paragraph>
      </div>
    </div>
  );
};
