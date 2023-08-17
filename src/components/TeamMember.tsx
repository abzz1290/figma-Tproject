import React from "react";
import { Card } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import "./TeamMember.css";

interface TeamMemberProps {
  name: string;
  occupation: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  occupation,
  imageSrc,
}) => {
  return (
    <Card
      className="team-member-card"
      cover={
        <img
          src={imageSrc}
          alt={`${name}'s Avatar`}
          style={{ width: "auto", height: "auto" }}
        />
      }
    >
      <div className="team-member-info">
        <h3>{name}</h3>
        <p>{occupation}</p>
      </div>
    </Card>
  );
};

export default TeamMember;
