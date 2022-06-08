import { FC } from "react";
import { Card, Select, Typography } from "antd";

import './styles.scss';

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
    <Card className="filter-card">
      <Typography.Text>List of shops</Typography.Text>
      <Select className="filter-card__select" value={selectedId} options={options} onSelect={handleSelected} />
    </Card>
  );
};
