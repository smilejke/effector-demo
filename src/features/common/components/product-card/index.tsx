import { FC, ReactNode } from "react";
import Card from "antd/lib/card";
import Input from "antd/lib/input";
import Typography from "antd/lib/typography";
import { TMenuPosition } from "features/home/types";

import {
  ShoppingCartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import "./styles.css";

const { Meta } = Card;
const { Text } = Typography;

interface ProductCardProps {
  position: TMenuPosition;
  onClick?: () => void;
  page: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  position,
  onClick,
  page,
}) => {
  const setActions = (page: string, price: number): ReactNode[] => {
    if (page === "home") {
      return [
        <Text strong key="price">
          {price.toFixed(2)} BYN
        </Text>,
        <ShoppingCartOutlined key="buy" />,
      ];
    }

    return [
      <Text strong key="price">
        {price.toFixed(2)} BYN
      </Text>,
      <PlusCircleOutlined key="add" />,
      <Input
        style={{ textAlign: "center", width: "60%", cursor: "pointer" }}
        value={5}
        readOnly
        key="count"
      />,
      <MinusCircleOutlined key="delete" />,
    ];
  };

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
      actions={setActions(page, position.price)}
    >
      <Meta title={position.title} description={position.description} />
    </Card>
  );
};
