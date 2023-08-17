import { Row, Col, Button } from 'antd';
import laptopImage from '../images/ctasecondsec.svg'; 
import "./CtaSection2.css"

const CtaSection2 = () => {
  return (
    <div className='test2'>
    <Row gutter={16} className='cta-section2-row'>
      <Col xs={24} md={12}>
        <div className='section2-container' style={{ padding: '16px' }}>
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p style={{ marginBottom: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            gravida justo sit amet quam porta, a sodales orci gravida.
          </p>
          <Button type="primary">Learn More</Button>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <img className='cta-section2-img' src={laptopImage} alt="Laptop" style={{ maxWidth: '100%' }} />
      </Col>
    </Row>
    </div>
  );
};

export default CtaSection2;
