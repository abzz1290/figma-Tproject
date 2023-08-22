import React, { FC } from "react";
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

const Footer: FC = () => {
  return (
    <AntdFooter className="footer">
      <Row justify="center">
        <Col xs={24} md={12} lg={24}>
          <div className="footer-content">
            <div className="footer-icon">
              <Space size="large">
                <GithubOutlined />
                <TwitterOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
                <FacebookOutlined />
                <YoutubeOutlined />
              </Space>
            </div>
            <div className="footer--copywrites">
              <p className="copywrite">© 2023 Your Company. All rights reserved.</p>
            </div>
          </div>
        </Col>
      </Row>
    </AntdFooter>
  );
};

export default Footer;
