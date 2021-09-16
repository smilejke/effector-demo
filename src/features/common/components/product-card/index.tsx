import { FC, ReactNode } from "react";
import Card from "antd/lib/card";
import Input from "antd/lib/input";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import { TMenuPosition } from "features/home/types";

import {
  ShoppingCartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import "./styles.css";
import { addToCart, deleteFromCart } from "features/cart/controllers";

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
  const setActions = (page: string, product: TMenuPosition): ReactNode[] => {
    if (page === "home") {
      return [
        <Text strong key="price">
          {product.price.toFixed(2)} BYN
        </Text>,
        <Button
          icon={<ShoppingCartOutlined />}
          type="primary"
          key="add"
          shape="circle"
          size="large"
          onClick={onClick}
        />,
      ];
    }

    return [
      <Text strong key="price">
        {product.price.toFixed(2)} BYN
      </Text>,
      <Button
        icon={<PlusCircleOutlined />}
        type="primary"
        key="add"
        shape="circle"
        size="large"
        onClick={() => addToCart(product)}
      />,
      <Input
        style={{
          textAlign: "center",
          width: "60%",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        value={product.count}
        readOnly
        key="count"
      />,
      <Button
        icon={<MinusCircleOutlined />}
        size="large"
        type="primary"
        key="delete"
        shape="circle"
        onClick={() => deleteFromCart(product)}
      />,
    ];
  };

  return (
    <Card
      hoverable
      data-clickable={Boolean(onClick)}
      style={{ maxWidth: "30rem" }}
      cover={
        <img
          src={position.src}
          alt={position.title}
          style={{ height: "15rem", objectFit: "cover" }}
        />
      }
      actions={setActions(page, position)}
    >
      <Meta title={position.title} description={position.description} />
    </Card>
  );
};
