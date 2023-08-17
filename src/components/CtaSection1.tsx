import { Row, Col, Button } from "antd";
import laptopImage from "../images/ctafirstsec.svg";
import './CtaSection1.css';
const CtaSection1 = () => {
  return (
    <div className="test">
      <Row gutter={16}>
        <Col xs={24} sm={12} md={6} lg={12}>
          <img src={laptopImage} alt="Laptop" style={{ maxWidth: "100%" }} />
        </Col>
        <Col xs={24} sm={12} md={6} lg={12}>
          <div className="section-container" style={{ padding: "16px" }}>
            <h2 className="heading">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="section-container--text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <Button className="cta-section--btn" type="primary">Learn More</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CtaSection1;
