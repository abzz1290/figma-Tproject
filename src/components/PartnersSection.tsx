import React, { FC } from "react";
import { Button } from "antd";
import "./PartnersSection.css";

import googleLogo from "../images/google-ar21.svg";
import microsoftLogo from "../images/microsoft.svg";
import airbnbLogo from "../images/airbnb-ar21.svg";
import facebookLogo from "../images/facebook-ar21.svg";
import spotifyLogo from "../images/spotify-ar21.svg";

const PartnersSection: FC = () => {
  return (
    <div className="partners-section">
      <h2 className="sub-heading">Our Partners</h2>
      <div className="partners-content">
        <h1 className="heading">Trusted by Leading Brands</h1>
        <p className="partners-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="brand-logos">
          <img src={googleLogo} className="brand-logo" alt="Google" />
          <img src={microsoftLogo} className="brand-logo" alt="Microsoft" />
          <img src={airbnbLogo} className="brand-logo" alt="Airbnb" />
          <img src={facebookLogo} className="brand-logo" alt="Facebook" /> 
          <img src={spotifyLogo} className="brand-logo" alt="Spotify" /> 
        </div>
        <Button className="partners-cta-button" type="default">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default PartnersSection;
