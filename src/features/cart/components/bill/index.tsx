import Card from "antd/lib/card";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import { useTotalPrice } from "features/cart/selectors";
import { TMenu } from "features/home/types";
import { FC } from "react";
import { BillContentTable } from "features/cart/components/bill-content-table";

const { Text } = Typography;

interface BillProps {
  cart: TMenu;
}

export const Bill: FC<BillProps> = ({ cart }) => {
  const total = useTotalPrice();

  return (
    <Card
      title="Bill"
      style={{ width: 500 }}
      actions={[
        <Text strong>Total: {total.toFixed(2)} BYN</Text>,
        <Button type="primary">Confirm Order</Button>,
      ]}
    >
      <BillContentTable cart={cart} />
    </Card>
  );
};
