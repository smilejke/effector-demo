import { FC } from "react";
import Table from "antd/lib/table";
import Typography from "antd/lib/typography";

import { TMenu } from "features/home/types";

const { Text } = Typography;

interface BilTableProps {
  cart: TMenu;
}

export const BillContentTable: FC<BilTableProps> = ({ cart }) => {
  const data = cart.map((item, index) => ({
    position: item.title,
    amount: item.count,
    price: item.total,
    id: index,
  }));

  const columns = [
    {
      title: "Position",
      dataIndex: "position",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Price, BYN",
      dataIndex: "price",
      render: (value: number) => <Text strong>{value.toFixed(2)}</Text>,
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      rowKey="id"
      style={{ width: "100%", height: "100%" }}
      scroll={{ y: "30rem" }}
    />
  );
};
