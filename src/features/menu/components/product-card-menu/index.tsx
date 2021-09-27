import { FC, useEffect, useState } from "react";
import Button from "antd/lib/button";
import Typography from "antd/lib/typography";
import { ShoppingCartOutlined } from "@ant-design/icons";

import {
  ProductCard,
  ProductCardBaseProps,
} from "features/common/components/product-card";
import { addToCart } from "features/cart/controllers";
import { TMenuPosition } from "features/menu/types";

const { Text } = Typography;

export const ProductCardMenu: FC<ProductCardBaseProps> = ({
  position,
  ...props
}) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const cancelClickEffect = setTimeout(() => setClicked(false), 250);
      return () => clearTimeout(cancelClickEffect);
    }
  }, [clicked]);

  const handleAction = (product: TMenuPosition) => {
    setClicked(true);
    addToCart(product);
  };

  return (
    <ProductCard
      {...props}
      clicked={clicked}
      position={position}
      actions={[
        <Text strong key="price">
          {position.price.toFixed(2)} BYN
        </Text>,
        <Button
          icon={<ShoppingCartOutlined />}
          type="primary"
          key="add"
          size="large"
          style={{ minWidth: "5rem" }}
          onClick={() => handleAction(position)}
        />,
      ]}
    />
  );
};
