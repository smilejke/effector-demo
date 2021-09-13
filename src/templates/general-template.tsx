import { FC } from "react";
import { Layout } from "antd";
import { HeaderTemplate } from "templates/header-template";
import { MenuTemplate as Menu } from "templates/menu-template";

import "./styles.css";
import { TDefaultSelectedKeys } from "templates/types";

const { Content, Footer, Sider } = Layout;

interface GeneralTemplateProps {
  selectedMenu?: TDefaultSelectedKeys;
  children: JSX.Element;
}

export const GeneralTemplate: FC<GeneralTemplateProps> = ({
  selectedMenu,
  children,
}) => {
  const isHomePage = selectedMenu !== "cart" && selectedMenu !== "status";

  return (
    <Layout>
      <HeaderTemplate selectedKey={selectedMenu} />
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0" }}>
          {isHomePage && (
            <Sider className="site-layout-background" width={200}>
              <Menu />
            </Sider>
          )}
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center", padding: "10px 50px 15px" }}>
        Effector demo app ©2021 Created by Vadim Melnikov
      </Footer>
    </Layout>
  );
};
