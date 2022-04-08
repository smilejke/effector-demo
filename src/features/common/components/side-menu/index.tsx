import { Layout } from "antd";
import { MenuTemplate as Menu } from "templates/menu-template";

const { Sider } = Layout;

export const SideMenu = () => (
  <Sider className="site-layout-background" width={200}>
    <Menu />
  </Sider>
);
