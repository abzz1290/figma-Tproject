import React from "react";
import { FC } from "react";
import { Button, Row, Col } from "antd";
import { ReactComponent as HeroImage } from "../../assets/heroimage.svg";
import "./HeroSection.css";
import "../../App.css";
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
    <header className="hero-section">
      <div className="hero-section--div">
        <Row justify="center" align="middle">
          <Col
            xs={24}
            sm={12}
            lg={14}
            style={{ margin: 0 }}
            className="hero-content"
          >
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
          <div className="hero-section--image">
            <Col xs={24} sm={12} lg={16} className="hero-image">
              <HeroImage className="mobile--svg" />
            </Col>
          </div>
        </Row>
      </div>
    </header>
  );
};

export default HeroSection;
