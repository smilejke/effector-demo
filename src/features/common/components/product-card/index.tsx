import { FC, ReactNode, useEffect, useState } from "react";
import Card from "antd/lib/card";
import Input from "antd/lib/input";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import {
  ShoppingCartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

import { addToCart, deleteFromCart } from "features/cart/controllers";
import { TProductCardAction } from "features/common/types";
import { TMenuPosition } from "features/home/types";

import "./styles.css";

const { Meta } = Card;
const { Text } = Typography;

interface ProductCardProps {
  position: TMenuPosition;
  page: string;
}

export const ProductCard: FC<ProductCardProps> = ({ position, page }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const cancelClickEffect = setTimeout(() => setClicked(false), 150);
      return () => clearTimeout(cancelClickEffect);
    }
  }, [clicked]);

  const handleAction = (
    actionType: TProductCardAction,
    product: TMenuPosition
  ) => {
    setClicked(true);

    switch (actionType) {
      case "add":
        addToCart(product);
        break;
      case "remove":
        deleteFromCart(product);
        break;
      default:
        return () => null;
    }
  };

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
          size="large"
          style={{ minWidth: "5rem" }}
          onClick={() => handleAction("add", product)}
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
        onClick={() => handleAction("add", product)}
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
        onClick={() => handleAction("remove", product)}
      />,
    ];
  };

  return (
    <Card
      hoverable
      data-clicked={clicked}
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
