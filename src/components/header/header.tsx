import React, { FC, useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import "./header.css";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

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

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout.Header className={`header ${isMobile ? "mobile-header" : ""}`}>
      {isMobile ? (
        <div className="mobile-content">
          <div className="logo">
            <img src={logo} alt="Logo" width={45} height={31} />
          </div>
          <div className="title">{title}</div>
        </div>
      ) : (
        <>
          <div className="logo">
            <img src={logo} alt="Logo" width={70} height={48} />
          </div>
          <div className="title">{title}</div>
        </>
      )}
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
