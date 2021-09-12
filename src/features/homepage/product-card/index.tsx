import { FC } from "react";
import { Card } from "antd";

const { Meta } = Card;

interface ProductCardProps {
  title: string;
  description: string;
  src: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  src,
}) => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: "0 1rem 1.5rem" }}
      cover={
        <img
          src={src}
          alt={title}
          style={{ height: "15rem", objectFit: "cover" }}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
