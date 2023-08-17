import { FC } from "react";
import { Button, Row, Col } from "antd";
import { ReactComponent as Section2Image } from "../images/ctasecondsec.svg";
import "./CtaSection2";

interface Section2Props {
  heading: string;
  content: string;
  buttonText: string;
}

const Section2: FC<Section2Props> = ({
  heading,
  content,
  buttonText,
}) => {
  return (
    <div className="section2">
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} lg={8} className="section2-content">
          <h2 className="section2-heading">{heading}</h2>
          <p className="section2-text">{content}</p>
          <Button className="ant-btn section2-cta-button" type="primary">
            {buttonText}
          </Button>
        </Col>
        <Col xs={24} sm={12} lg={8} className="section2-image">
          <Section2Image />
        </Col>
      </Row>
    </div>
  );
};

export default Section2;
