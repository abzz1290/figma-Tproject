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
    <Row gutter={16}>

      <Col xs={24} sm={12} lg={8} className="hero-image">
        <HeroImage />
      </Col>
      <Col xs={24} sm={12} lg={8} className="hero-content">
        <h2 className="hero-sub-heading">{subHeading}</h2>
        <h1 className="hero-main-heading">{heading}</h1>
        <p className="hero-section-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
          voluptate culpa nesciunt delectus iste?
        </p>
  
        <Button
          className="ant-btn hero-cta-button"
          type="primary"
          size="large"
        >
          {buttonText}
        </Button>
      </Col>
    </Row>
  </div>
  
  );
};

export default HeroSection;
