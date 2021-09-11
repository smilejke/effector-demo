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
      style={{ width: 240, margin: "0 1rem 1.5rem" }}
      className="product-card"
      cover={<img alt={title} src={src} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
