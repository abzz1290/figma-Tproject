import React from "react";
import { Layout, Row, Col, Space } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Footer: AntdFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntdFooter className="footer">
      <Row justify="center">
        <Col xs={24} md={12}>
          <div className="footer-content">
            <Space size="large">
              <GithubOutlined />
              <TwitterOutlined />
              <InstagramOutlined />
              <LinkedinOutlined />
              <FacebookOutlined />
              <YoutubeOutlined />
            </Space>
            <p className="copywrite">© 2023 Your Company. All rights reserved.</p>
          </div>
        </Col>
      </Row>
    </AntdFooter>
  );
};

export default Footer;
