import { useCart } from "features/cart/selectors";
import { ProductCard } from "features/common/components/product-card";

import "./styles.css";
import { Typography } from "antd";

export const Cart = () => {
  const cart = useCart();

  return (
    <div className="order-container">
      <Typography.Title
        level={1}
        style={{ marginBottom: "0", textAlign: "center" }}
      >
        Specify your order
      </Typography.Title>
      {cart.map((item, index) => (
        <ProductCard
          position={item}
          key={`product-${item.title}-${index}`}
          page="cart"
        />
      ))}
    </div>
  );
};
