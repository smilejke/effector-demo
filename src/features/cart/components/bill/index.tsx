import { FC } from "react";
import Card from "antd/lib/card";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import { useTotalPrice } from "features/cart/selectors";
import { useOrderFetching } from "features/orders/selectors";
import { BillContentTable } from "features/cart/components/bill-content-table";
import { createOrderFx } from "features/orders/controllers";
import { TCart } from "features/cart/types";

import "./styles.scss";

const { Text } = Typography;

interface BillProps {
  cart: TCart;
}

export const Bill: FC<BillProps> = ({ cart }) => {
  const total = useTotalPrice();
  const orderPending = useOrderFetching();

  return (
    <Card
      className="bill"
      actions={[
        <Text strong>Total: {total.toFixed(2)} BYN</Text>,
        <Button
          type="primary"
          loading={orderPending}
          onClick={() => createOrderFx({ cart, total })}
        >
          Confirm Order
        </Button>,
      ]}
    >
      <BillContentTable cart={cart} />
    </Card>
  );
};
