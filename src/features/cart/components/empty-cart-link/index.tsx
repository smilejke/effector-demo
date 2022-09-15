import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";

import "./styles.css";

interface EmptyCartLinkProps {
  description: string;
  linkTo: string;
}

export const EmptyCartLink: FC<EmptyCartLinkProps> = ({
  description,
  linkTo,
}) => {
  return (
    <div className="empty-cart-link">
      <span>{description}</span>

      <Link to={linkTo}>
        <Button type="primary">Go to menu</Button>
      </Link>
    </div>
  );
};
