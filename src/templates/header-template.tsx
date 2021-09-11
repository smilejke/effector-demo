import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { paths } from "pages/paths";

const { Header } = Layout;

export const HeaderTemplate = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["products"]}>
        <Menu.Item key="products">
          <Link to={paths.home()}>Products</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to={paths.cart()}>Cart</Link>
        </Menu.Item>
        <Menu.Item key="status">
          <Link to={paths.status()}>Order status</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
