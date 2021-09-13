import { FC } from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "features/cart/controllers";
import { TMenuPosition } from "features/home/types";

import "./styles.css";

const { Meta } = Card;

interface ProductCardProps {
  position: TMenuPosition;
}

export const ProductCard: FC<ProductCardProps> = ({ position }) => {
  return (
    <Card
      hoverable
      onClick={() => addToCart(position)}
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
