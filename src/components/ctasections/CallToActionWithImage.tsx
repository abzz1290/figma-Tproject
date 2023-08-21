import { Row, Col, Button } from 'antd';
import laptopImage from '../../assets/ctafirstsec.svg'; 
import './CallToActionWithImage.css';

const CallToActionWithImage = () => {
  return (
    <section className='cta-section'>
      <Row  justify="center" align="middle">
        {/* For desktop devices */}
        <Col xs={0} sm={0} md={12}>
          <div className="cta-img">
            <img className='cta-image' src={laptopImage} alt="Laptop" style={{ maxWidth: '100%' }} />
          </div>
        </Col>
        <Col xs={0} sm={0} md={12}>
          <div className='cta-section-container'>
            <h2 className='cta-section-heading'>Lorem ipsum dolor sit amet consectetur</h2>
            <p className='cta-section-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              gravida justo sit amet quam porta, a sodales orci gravida.
            </p>
            <Button className='cta-section-btn' type="primary">Learn More</Button>
          </div>
        </Col>

        {/* For mobile devices */}
        <Col xs={24} sm={24} md={0}>
          <div className="cta-img">
            <img className='cta-image' src={laptopImage} alt="Laptop" style={{ maxWidth: '100%' }} />
          </div>
          <div className='cta-section-container'>
            <h2 className='cta-section-heading'>Lorem ipsum dolor sit amet consectetur</h2>
            <p className='cta-section-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              gravida justo sit amet quam porta, a sodales orci gravida.
            </p>
            <Button className='cta-section-btn' type="primary">Learn More</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default CallToActionWithImage;
