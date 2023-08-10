import React, { FC } from "react";
import { Button, Row, Col } from "antd";
import { ReactComponent as HeroImage } from "../images/heroimage.svg";
import "./HeroSection.css";

interface HeroSectionProps {
  subHeading: string;
  heading: string;
  buttonText: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  subHeading,
  heading,
  buttonText,
}) => {
  return (
    <div className="hero-section">
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} lg={8} className="hero-content">
          <h2 className="sub-heading">{subHeading}</h2>
          <h1 className="heading">{heading}</h1>
          <p className="dummy-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button className="cta-button" type="primary">
            {buttonText}
          </Button>
        </Col>
        <Col xs={24} sm={12} lg={8} className="hero-image">
          <HeroImage />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
