import { FC } from "react";
import { Card, Image, Typography } from "antd";
import { ShopLocation } from "src/shared/types";

import "./styles.css";

interface SelectedShopCardProps {
  data: ShopLocation | null;
}

export const SelectedShopCard: FC<SelectedShopCardProps> = ({ data }) => {
  return (
    <Card>
      <div className="shop-card">
        <Typography.Text>{data?.name}</Typography.Text>
        <Typography.Text>{data?.address}</Typography.Text>
        <Typography.Text>{data?.phone}</Typography.Text>
        <div className="shop-card__hours">
          <Typography.Text>Open: {data?.workingHours.open}</Typography.Text>
          <Typography.Text>Close: {data?.workingHours.close}</Typography.Text>
        </div>
      </div>
      <Image src={data?.picture} alt={data?.name} />
    </Card>
  );
};
