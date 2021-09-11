import { FC } from "react";
import { Layout } from "antd";
import { HeaderTemplate } from "templates/header-template";
import { MenuTemplate as Menu } from "templates/menu-template";

import "./style.css";

const { Content, Footer, Sider } = Layout;

interface GeneralTemplateProps {
  children: JSX.Element;
}

export const GeneralTemplate: FC<GeneralTemplateProps> = ({ children }) => (
  <Layout>
    <HeaderTemplate />
    <Content style={{ padding: "0 50px" }}>
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Sider className="site-layout-background" width={200}>
          <Menu />
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);
