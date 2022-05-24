import { FC } from "react";
import { Card, Typography } from "antd";
import { ShopLocation } from "src/shared/types";

interface SelectedShopCardProps {
  data: ShopLocation | null;
}

export const SelectedShopCard: FC<SelectedShopCardProps> = ({ data }) => {
  return (
    <Card>
      <Typography.Text>{data?.name}</Typography.Text>
    </Card>
  );
};
