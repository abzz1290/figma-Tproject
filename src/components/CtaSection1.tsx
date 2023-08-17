import { FC } from "react";
import { Button, Row, Col } from "antd";
import { ReactComponent as Section1Image } from "../images/ctafirstsec.svg";
// import "./Section1.css";

interface Section1Props {
  heading: string;
  content: string;
  buttonText: string;
}

const Section1: FC<Section1Props> = ({ heading, content, buttonText }) => {
  return (
    <div className="section1">
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} lg={8} className="section1-image">
          <Section1Image />
        </Col>
        <Col xs={24} sm={12} lg={8} className="section1-content">
          <h2 className="section1-heading">{heading}</h2>
          <p className="section1-text">{content}</p>
          <Button className="ant-btn section1-cta-button" type="primary">
            {buttonText}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Section1;
