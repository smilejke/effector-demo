import { FC } from "react";
import { Button } from "antd";

import './styles.scss';

interface ZoomButtonsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export const ZoomButtons: FC<ZoomButtonsProps> = ({
  onZoomIn,
  onZoomOut,
}) => {
  return (
    <div className="zoom-buttons">
      <Button onClick={onZoomIn}>Zoom In</Button>
      <Button onClick={onZoomOut}>Zoom Out</Button>
    </div>
  );
};
