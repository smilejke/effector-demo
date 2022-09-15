import { FC } from "react";
import Typography from "antd/lib/typography";
import { TOrder } from "features/orders/types";

import "./styles.css";

const { Title, Paragraph, Text } = Typography;

interface OrderCardProps {
  order: TOrder;
}

export const OrderCard: FC<OrderCardProps> = ({ order }) => {
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
    <div className="card">
      <div className="card__content">
        <div className="card__front">
          <Title level={3} className="card__title">
            {order.orderId}
          </Title>
          <Paragraph className="card__subtitle">
            Order <Text>№</Text>
          </Paragraph>
        </div>

        <div className="card__back">
          <div className="card__body">
            <Paragraph>{date}</Paragraph>
            <Paragraph strong>
              Total bill: {order.total.toFixed(2)} BYN
            </Paragraph>
            <Paragraph strong>
              Status:{" "}
              <Text code data-status={order.status}>
                {order.status}
              </Text>
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};
