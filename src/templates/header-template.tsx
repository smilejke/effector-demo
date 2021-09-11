import { Menu, Layout } from 'antd';

const { Header } = Layout;

export const HeaderTemplate = () => {
    return <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
    </Header>
}