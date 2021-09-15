import { FC } from "react";
import { Card } from "antd";
import { TMenuPosition } from "features/home/types";

import { ShoppingCartOutlined } from "@ant-design/icons";
import "./styles.css";

const { Meta } = Card;

interface ProductCardProps {
  position: TMenuPosition;
  onClick?: () => void;
}

export const ProductCard: FC<ProductCardProps> = ({ position, onClick }) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      data-clickable={Boolean(onClick)}
      style={{ maxWidth: "30rem" }}
      cover={
        <img
          src={position.src}
          alt={position.title}
          style={{ height: "15rem", objectFit: "cover" }}
        />
      }
      actions={[
        <span key="price">{position.price.toFixed(2)} BYN</span>,
        <ShoppingCartOutlined key="buy" />,
      ]}
    >
      <Meta title={position.title} description={position.description} />
    </Card>
  );
};
