import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "query-string";

import { Menu } from "antd";

export const MenuTemplate = () => {
  const { search } = useLocation();
  const selected = useMemo(() => qs.parse(search).section as string, [search]);

  return (
    <Menu
      mode="inline"
      style={{ height: "100%" }}
      defaultSelectedKeys={[selected || "all"]}
    >
      <Menu.Item key="all">
        <Link to="?section=all" />
        All menu positions
      </Menu.Item>
      <Menu.Item key="soups">
        <Link to="?section=soups" />
        Soups
      </Menu.Item>
      <Menu.Item key="salads">
        <Link to="?section=salads" />
        Salads
      </Menu.Item>
      <Menu.Item key="burgers">
        <Link to="?section=burgers" />
        Burgers
      </Menu.Item>
    </Menu>
  );
};
