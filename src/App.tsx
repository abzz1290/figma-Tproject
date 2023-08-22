import React, { FC } from "react";
import { Layout } from "antd";
import "./App.css";
import Header from "../src/components/header/header";
import HeroSection from "../src/components/herosection/HeroSection";
import PartnersSection from "../src/components/brandsection/PartnersSection";
import OurTeamSection from "../src/components/teamsection/OurTeamSection";
import Footer from "../src/components/footer/Footer";
import CallToActionWithImage from "../src/components/ctasections/CallToActionWithImage";
import CallToActionWithImageReversed from "../src/components/ctasections/CallToActionWithImageReversed";

const { Content } = Layout;

const App: FC = () => {
  return (
    <Layout className="App">
      <Header title="Start" />
      <HeroSection
        subHeading="Welcome"
        heading="Lorem ipsum dolor sit amet consectetur"
        buttonText="Explore"
      />
      <PartnersSection />

      <Layout className="section-container">
        <Content style={{ backgroundColor: "white" }}>
          <CallToActionWithImage />
        </Content>
      </Layout>

      <Layout className="section-container">
        <Content style={{ backgroundColor: "white" }}>
          <CallToActionWithImageReversed />
        </Content>
      </Layout>

      <OurTeamSection />
      <Footer />
    </Layout>
  );
};

export default App;
