import { Row, Col, Button } from 'antd';
import laptopImage from './assets/ctasecondsec.svg'; 
import './CallToActionWithImageReversed.css';

const CallToActionWithImageReversed = () => {
  return (
    <section className='cta-section2'>
      <Row gutter={16}>
        {/* For mobile and tablet devices */}
        <Col xs={24} sm={24} md={0}>
          <div className="cta-img">
            <img className='cta-image' src={laptopImage} alt="Laptop" style={{ maxWidth: '100%' }} />
          </div>
          <div className='cta-section2-container'>
            <h2 className='cta-section2-heading'>Lorem ipsum dolor sit amet consectetur</h2>
            <p className='cta-section2-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              gravida justo sit amet quam porta, a sodales orci gravida.
            </p>
            <Button className='cta-section2-btn' type="primary">Learn More</Button>
          </div>
        </Col>

        {/* For desktop devices */}
        <Col xs={0} sm={0} md={24}>
          <Row gutter={16} align="middle">
            <Col xs={24} md={12} className='cta-section2-container'>
              <h2 className='cta-section2-heading'>Lorem ipsum dolor sit amet consectetur</h2>
              <p className='cta-section2-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                gravida justo sit amet quam porta, a sodales orci gravida.
              </p>
              <Button className='cta-section2-btn' type="primary">Learn More</Button>
            </Col>
            <Col xs={24} md={12} className='cta-img'>
              <img className='cta-image' src={laptopImage} alt="Laptop" style={{ maxWidth: '100%' }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default CallToActionWithImageReversed;
