import { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Spin } from "antd";

import { HeaderTemplate } from "templates/header-template";
import { TDefaultSelectedKeys } from "templates/types";

import "./styles.scss";

const { Content, Footer } = Layout;

interface GeneralTemplateProps {
  loading?: boolean;
  sideMenuChildren?: React.ReactNode;
}

export const GeneralTemplate: FC<GeneralTemplateProps> = ({
  children,
  sideMenuChildren,
  loading = false,
}) => {
  const { pathname } = useLocation();

  const pageIdentifier = useMemo(() => {
    const page = pathname.replaceAll("/", "") as TDefaultSelectedKeys;

    return {
      page,
    };
  }, [pathname]);

  return (
    <Layout>
      <HeaderTemplate selectedKey={pageIdentifier.page} />
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0" }}>
          {sideMenuChildren}
          <Content
            style={{
              padding: sideMenuChildren ? "0 24px" : "",
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
