import React from "react";
import { Button } from "antd";

interface HeroTextContentProps {
  subHeading: string;
  heading: string;
  buttonText: string;
}

const HeroTextContent: React.FC<HeroTextContentProps> = ({
  subHeading,
  heading,
  buttonText,
}) => {
  return (
    <div className="hero-content">
      <h2 className="hero-sub-heading">{subHeading}</h2>
      <h1 className="hero-main-heading">{heading}</h1>
      <p className="hero-section-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo
        hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate
        culpa nesciunt delectus iste?
      </p>
      <Button className="ant-btn hero-cta-button" type="primary" size="large">
        {buttonText}
      </Button>
    </div>
  );
};

export default HeroTextContent;
