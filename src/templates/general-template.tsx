import { FC } from "react";
import { Layout, Spin } from "antd";
import { HeaderTemplate } from "templates/header-template";
import { MenuTemplate as Menu } from "templates/menu-template";

import { TDefaultSelectedKeys } from "templates/types";
import "./styles.css";

const { Content, Footer, Sider } = Layout;

interface GeneralTemplateProps {
  selectedMenu?: TDefaultSelectedKeys;
  children: JSX.Element;
  loading?: boolean;
}

export const GeneralTemplate: FC<GeneralTemplateProps> = ({
  selectedMenu,
  children,
  loading = false,
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
          <Content
            style={{
              padding: isHomePage ? "0 24px" : "",
              minHeight: 280,
              display: !loading ? "block" : "flex",
            }}
          >
            {!loading && children}
            {loading && <Spin size="large" style={{ margin: "auto" }} />}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center", padding: "10px 50px 15px" }}>
        Effector demo app ©2021 Created by Vadim Melnikov
      </Footer>
    </Layout>
  );
};
