import { useCart } from "features/cart/selectors";
import { ProductCard } from "features/common/components/product-card";
import { Typography } from "antd";
import { Bill } from "features/cart/components/bill";

import "./styles.css";

const { Title } = Typography;

export const Cart = () => {
  const cart = useCart();

  return (
    <>
      <div className="order-container">
        <Title level={1} style={{ marginBottom: "0", textAlign: "center" }}>
          Specify your order:
        </Title>
        {cart.map((item) => (
          <ProductCard position={item} key={item.id} page="cart" />
        ))}
      </div>
      <div className="bill-container">
        <Bill cart={cart} />
      </div>
    </>
  );
};
