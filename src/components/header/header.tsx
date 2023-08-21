import { FC, useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { key: "home", title: "Home" },
    { key: "about", title: "About" },
  ];

  return (
    <Layout.Header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" width={50} height={50} />
      </div>
      <div className="title">{title}</div>
      <div className="burger-icon">
        <Button type="text" icon={<MenuOutlined />} onClick={toggleDrawer} />
      </div>
      <Drawer placement="right" visible={drawerOpen} onClose={closeDrawer}>
        <Menu mode="vertical">
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>{item.title}</Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </Layout.Header>
  );
};

export default Header;
