import { FC } from "react";
import { Button } from "antd";
import "./PartnersSection.css";
import googleLogo from "../../assets/google-ar21.svg";
import microsoftLogo from "../../assets/microsoft.svg";
import airbnbLogo from "../../assets/airbnb-ar21.svg";
import facebookLogo from "../../assets/facebook-ar21.svg";
import spotifyLogo from "../../assets/spotify-ar21.svg";

const brandLogos = [
  { logo: googleLogo, alt: "Google" },
  { logo: microsoftLogo, alt: "Microsoft" },
  { logo: airbnbLogo, alt: "Airbnb" },
  { logo: facebookLogo, alt: "Facebook" },
  { logo: spotifyLogo, alt: "Spotify" },
];

const PartnersSection: FC = () => {
  return (
    <div className="partners-section">
      <div className="partners-section--textarea">
        <h2 className="sub-heading">PARTNERS</h2>
        <h1 className="heading">Lorem Ipsum Dolor</h1>
        <p className="partners-text">
          Lorem ipsum dolor sit amet, consectetur <br />
          <p className="lower-text">
          adipiscing elit.
          </p>
        </p>
      </div>
      <div className="band-logos--gap-top-bottom">
        <div className="brand-logos">
          {brandLogos.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              className="brand-logo"
              alt={brand.alt}
            />
          ))}
        </div>
      </div>
      <Button className="cta-section--btn" type="default">
        Learn More
      </Button>
    </div>
  );
};

export default PartnersSection;
