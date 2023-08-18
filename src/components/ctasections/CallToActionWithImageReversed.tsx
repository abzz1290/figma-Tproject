import { Row, Col, Button } from 'antd';
import laptopImage from './assets/ctasecondsec.svg'; 
import './CallToActionWithImageReversed.css';
import './CallToActionWithImage.css';

const CallToActionWithImageReversed = () => {
  return (
    <section className='cta-section2'>
      <Row gutter={16} className='cta-section2-row'>
        <Col xs={24} md={12}>
          <div className='cta-section2-container'>
            <h2 className='cta-section2-heading'>Lorem ipsum dolor sit amet consectetur</h2>
            <p className='cta-section2-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              gravida justo sit amet quam porta, a sodales orci gravida.
            </p>
            <Button className='cta-section2-btn' type="primary">Learn More</Button>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <img className='cta-image' src={laptopImage} alt="Laptop" style={{ maxWidth: '100%' }} />
        </Col>
      </Row>
    </section>
  );
};

export default CallToActionWithImageReversed;
