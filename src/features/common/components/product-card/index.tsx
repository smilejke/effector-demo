import { FC } from "react";
import Card from "antd/lib/card";

import { TMenuPosition } from "features/home/types";
import { CartItem } from "features/cart/types";

import "./styles.scss";

const { Meta } = Card;

export interface ProductCardBaseProps {
  position: CartItem | TMenuPosition;
}

interface ProductCardProps extends ProductCardBaseProps {
  actions: any;
  clicked?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  position,
  clicked = false,
  actions,
}) => {
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
      actions={actions}
    >
      <Meta title={position.title} description={position.description} />
    </Card>
  );
};
