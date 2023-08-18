import { Row, Col, Button } from 'antd';
import laptopImage from '../images/ctasecondsec.svg'; 
import "./CtaSection2.css"

const CtaSection2 = () => {
  return (
    <div className='test2'>
    <Row gutter={16} className='cta-section2-row'>
      <Col xs={24} md={12}>
        <div className='section2-container'>
          <h2 className='heading'>Lorem ipsum dolor sit amet consectetur</h2>
          <p className='section-container--text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            gravida justo sit amet quam porta, a sodales orci gravida.
          </p>
          <Button className='cta-section--btn' type="primary">Learn More</Button>
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
