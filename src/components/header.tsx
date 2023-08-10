import { FC, useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../logo.svg"


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
    <>
      <header className="header">
      <img src={logo} width={50} height={50} />
        {/* <div className="logo">{logo}</div> */}
        <div className="title">{title}</div>
        <div className="burger-icon">
          <Button type="text" icon={<MenuOutlined />} onClick={toggleDrawer} />
        </div>
      </header>
      <Drawer
        placement="right"

        open={drawerOpen}
        onClose={closeDrawer}
      >
        <Menu mode="vertical">
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>{item.title}</Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </>
  );
};

export default Header;
