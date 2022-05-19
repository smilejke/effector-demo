import { FC } from "react";
import { Card, Select, Typography } from "antd";

interface CityFilterCardProps {
  cities?: string[];
  onChange?: (value: string) => void;
  selectedCity?: string;
}

export const CityFilterCard: FC<CityFilterCardProps> = ({
  cities = [],
  onChange,
  selectedCity,
}) => {
  return (
    <Card>
      <Typography.Text>Filter</Typography.Text>
      <Select />
      <Select />
    </Card>
  );
};
