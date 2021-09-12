import { Menu, Layout, Badge } from "antd";
import { Link } from "react-router-dom";
import { paths } from "pages/paths";

const { Header } = Layout;

export const HeaderTemplate = () => {
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["products"]}>
        <Menu.Item key="products">
          <Link to={paths.home()}>Products</Link>
        </Menu.Item>
        <Menu.Item key="status">
          <Link to={paths.status()}>Order status</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to={paths.cart()}>
            <Badge count={0} offset={[10, -5]}>
              Cart
            </Badge>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
