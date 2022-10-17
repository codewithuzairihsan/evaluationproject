import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Typography } from "antd";
import React from "react";
import { HeaderDiv } from "./Navbar.style";

const Navbar = () => {
  return (
    <>
      <HeaderDiv>
        <Row align="middle" gutter={10} justify="end">
          <Col>
            <Typography.Title level={2}>Uzair</Typography.Title>
          </Col>
          <Col>
            <Avatar icon={<UserOutlined />} />
          </Col>
        </Row>
      </HeaderDiv>
    </>
  );
};

export default Navbar;
