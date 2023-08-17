import React from 'react';
import { Row, Col, Button } from 'antd';
import laptopImage from '../images/ctafirstsec.svg'; 

const CtaSection1: React.FC = () => {
  return (
    <Row gutter={16}>
      <Col xs={24} md={12}>
        <img src={laptopImage} alt="Laptop" style={{ maxWidth: '100%' }} />
      </Col>
      <Col xs={24} md={12}>
        <div className='section-container' style={{ padding: '16px' }}>
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p style={{ marginBottom: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            gravida justo sit amet quam porta, a sodales orci gravida.
          </p>
          <Button type="primary">Learn More</Button>
        </div>
      </Col>
    </Row>
  );
};

export default CtaSection1;
