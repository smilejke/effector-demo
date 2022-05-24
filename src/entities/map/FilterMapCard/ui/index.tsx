import { FC } from "react";
import { Card, Select, Typography } from "antd";

interface CityFilterCardProps {
  options?: { value: string; label: string }[];
  onChange?: (value: string) => void;
  selectedId?: string;
}

export const FilterMapCard: FC<CityFilterCardProps> = ({
  options = [],
  onChange,
  selectedId,
}) => {
  const handleSelected = (value: string) => {
    onChange?.(value);
  };
  return (
    <Card>
      <Typography.Text>Filter</Typography.Text>
      <Select value={selectedId} options={options} onSelect={handleSelected} />
    </Card>
  );
};
