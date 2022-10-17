import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
// import ContentLayout from "../content/Content";
// import { SiderDiv } from "./Sidebar.style";
// import { Link } from "react-router-dom";
// import { TeamOutlined, UserOutlined } from "@ant-design/icons";
const { Sider } = Layout;

// In this Items we will provide the link to the Home page and about page
// const items = [
//   { label: "Home", key: "item-1" },
//   { label: "About", key: "item-2" },
// ];
const getItem = (
  label: JSX.Element | string,
  key: React.Key | JSX.Element,
  icon: JSX.Element
) => {
  return {
    key,
    icon,
    label,
  };
};
const items: any = [
  getItem(
    <Link to="/home" style={{ textDecoration: "none" }}>
      Home
    </Link>,
    "Home",
    <UserOutlined />
  ),
  getItem(
    <Link to="/about" style={{ textDecoration: "none" }}>
      About
    </Link>,
    "About",
    <TeamOutlined />
  ),
];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
