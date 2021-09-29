import { FC } from "react";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import Typography from "antd/lib/typography";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

import {
  ProductCard,
  ProductCardBaseProps,
} from "features/common/components/product-card";
import { TProductCardAction } from "features/common/types";
import { CartItem } from "features/cart/types";
import { selectProduct } from "features/menu/controllers";

const { Text } = Typography;

export const ProductCardCart: FC<ProductCardBaseProps> = ({
  position,
  ...props
}) => {
  const handleAction = (actionType: TProductCardAction, product: CartItem) => {
    switch (actionType) {
      case "add":
        selectProduct({ id: product.id, action: "add" });
        break;
      case "remove":
        selectProduct({ id: product.id, action: "remove" });
        break;
      default:
        return () => null;
    }
  };
  return (
    <ProductCard
      {...props}
      position={position}
      actions={[
        <Text strong key="price">
          {position.price.toFixed(2)} BYN
        </Text>,
        <Button
          icon={<PlusCircleOutlined />}
          type="primary"
          key="add"
          shape="circle"
          size="large"
          onClick={() => handleAction("add", position as CartItem)}
        />,
        <Input
          style={{
            textAlign: "center",
            width: "60%",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          value={position.count}
          readOnly
          key="count"
        />,
        <Button
          icon={<MinusCircleOutlined />}
          size="large"
          type="primary"
          key="delete"
          shape="circle"
          onClick={() => handleAction("remove", position as CartItem)}
        />,
      ]}
    />
  );
};
