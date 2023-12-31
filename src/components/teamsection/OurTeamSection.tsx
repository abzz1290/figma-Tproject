import React, { FC } from "react";
import { Row, Col, Button } from "antd";
import TeamMember from "./TeamMember";
import "./OurTeamSection.css";
import member1Image from "../../assets/member1.svg";
import member2Image from "../../assets/member1.svg";
import member3Image from "../../assets/member1.svg";
import member4Image from "../../assets/member1.svg";

const teamMembers = [
  { name: "John Doe", occupation: "Ceo", imageSrc: member1Image },
  { name: "Jane Smith", occupation: "CTO", imageSrc: member2Image },
  { name: "Jane Smith", occupation: "UI/UX", imageSrc: member3Image },
  { name: "Jane Smith", occupation: "Designer", imageSrc: member4Image },
];

const OurTeamSection: FC = () => {
  return (
    <section className="our-team-section">
      <div className="partners-section">
        <div className="our-team--text-area">
          <h2 className="sub-heading">Team</h2>
          <div className="partners-content">
            <h1 className="heading our-team--heading">Our Talent</h1>
            <p className="partners-text">
              Lorem ipsum dolor sit amet, consectetur <br />
              <p className="lower-text">adipiscing elit.</p>
            </p>
          </div>
        </div>
      </div>
      <Row gutter={[16, 16]}>
        {teamMembers.map((member, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <TeamMember
              name={member.name}
              occupation={member.occupation}
              imageSrc={member.imageSrc}
            />
          </Col>
        ))}
        <Col xs={24} className="team-btn-col">
          <div className="team-btn-div">
            <Button className="team-btn" type="primary">
              Learn More
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default OurTeamSection;
