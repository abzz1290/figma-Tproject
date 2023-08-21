import React from "react";
import { Row, Col, Button } from "antd";
import TeamMember from "./TeamMember";
import "./OurTeamSection.css";
import member1Image from "./assets/member1.svg";
import member2Image from "./assets/member1.svg";
import member3Image from "./assets/member1.svg";
import member4Image from "./assets/member1.svg";

const OurTeamSection: React.FC = () => {
  return (
    <section className="our-team-section">
      <div className="partners-section">
        <h2 className="sub-heading">Team</h2>
        <div className="partners-content">
          <h1 className="heading">Our Talent</h1>
          <p className="partners-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <Row className="testyo" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <TeamMember 
            name="John Doe"
            occupation="Ceo"
            imageSrc={member1Image}
          />
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <TeamMember
            name="Jane Smith"
            occupation="CTO"
            imageSrc={member2Image}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TeamMember
            name="Jane Smith"
            occupation="UI/UX"
            imageSrc={member3Image}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TeamMember
            name="Jane Smith"
            occupation="Designer"
            imageSrc={member4Image}
          />
        </Col>
        <Col xs={24} className="team-btn-col">
          <div className="team-btn-div">
            <Button className="team-btn" type="primary">Learn More</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default OurTeamSection;
