import { Row, Col, Button } from "antd";
import laptopImage from "./assets/ctafirstsec.svg";
import './CallToActionWithImage.css';

const CallToActionWithImage = () => {
  return (
    
      <Row gutter={16}>
        <div className="cta-main">
        <Col xs={24} sm={12} md={6} lg={12}>
          <div className="cta-img">
          <img className="cta-image" src={laptopImage} alt="Laptop" style={{ maxWidth: "100%" }} />
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={12}>
          <div className="section-container">
            <h2 className="heading">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="section-container--text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <Button className="cta-section--btn" type="primary">Learn More</Button>
          </div>
        </Col>
          </div>
      </Row>
    
  );
};

export default CallToActionWithImage;
