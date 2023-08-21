import React, { FC, useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import "../header/header.css";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); // Set initial screen size

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { key: "home", title: "Home" },
    { key: "portfolio", title: "Portfolio" },
    { key: "services", title: "Services" },
    { key: "contact", title: "Contact" },
  ];

  // Function to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  return (
    <Layout.Header className={`header ${isMobile ? "mobile-header" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" width={50} height={50} />
      </div>
      <div className="title">{title}</div>
      {isMobile ? (
        <div className="burger-icon">
          <Button type="text" icon={<MenuOutlined />} onClick={toggleDrawer} />
        </div>
      ) : (
        <Menu mode="horizontal" className="desktop-menu">
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>{item.title}</Menu.Item>
          ))}
        </Menu>
      )}
      <Drawer
        placement="right"
        visible={drawerOpen}
        onClose={closeDrawer}
        className={isMobile ? "" : "hide-drawer-desktop"}
      >
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
