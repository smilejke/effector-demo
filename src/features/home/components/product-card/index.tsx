import { FC } from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./styles.css";

const { Meta } = Card;

interface ProductCardProps {
  title: string;
  description: string;
  src: string;
  price: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  src,
  price,
}) => {
  return (
    <Card
      hoverable
      cover={
        <img
          src={src}
          alt={title}
          style={{ height: "15rem", objectFit: "cover" }}
        />
      }
      actions={[
        <span key="price">{price.toFixed(2)} BYN</span>,
        <ShoppingCartOutlined key="buy" />,
      ]}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
