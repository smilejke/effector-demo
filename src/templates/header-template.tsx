import { FC } from "react";
import { Link } from "react-router-dom";

import { Menu, Layout, Badge } from "antd";
import { paths } from "pages/paths";
import { useCartLength } from "features/cart/selectors";
import { TDefaultSelectedKeys } from "templates/types";
import { setPadding } from "templates/helpers";

const { Header } = Layout;

interface HeaderTemplateProps {
  selectedKey: TDefaultSelectedKeys;
}

export const HeaderTemplate: FC<HeaderTemplateProps> = ({ selectedKey }) => {
  const cartLength = useCartLength();

  return (
    <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[selectedKey || "products"]}
      >
        <Menu.Item key="products">
          <Link to={paths.menu()} />
          Products
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to={paths.orders()} />
          Order status
        </Menu.Item>
        <Menu.Item key="map">
          <Link to={paths.map()} />
          Shops
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingRight: setPadding(cartLength) }}>
          <Link to={paths.cart()}>
            <Badge count={cartLength} offset={[15, -5]}>
              Cart
            </Badge>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
