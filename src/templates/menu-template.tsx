import { Menu } from "antd";
import { selectCategory } from "features/home/controllers";

export const MenuTemplate = () => {
  return (
    <Menu
      mode="inline"
      style={{ height: "100%" }}
      defaultSelectedKeys={["all"]}
    >
      <Menu.Item key="all" onClick={() => selectCategory("all")}>
        All menu positions
      </Menu.Item>
      <Menu.Item key="soups" onClick={() => selectCategory("soups")}>
        Soups
      </Menu.Item>
      <Menu.Item key="salads" onClick={() => selectCategory("salads")}>
        Salads
      </Menu.Item>
      <Menu.Item key="burgers" onClick={() => selectCategory("burgers")}>
        Burger
      </Menu.Item>
    </Menu>
  );
};
