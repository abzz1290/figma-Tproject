import React, { FC } from "react";
import { Layout } from 'antd';
import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import CtaSection1 from './components/CtaSection1';
import CtaSection2 from "./components/CtaSection2";
import OurTeamSection from "./components/OurTeamSection"; 
import Footer from "./components/Footer";

const { Content } = Layout;

const App: FC = () => {
  return (
    <div className="App">
      <Header title="Start" />
      <HeroSection
        subHeading="Welcome"
        heading="Lorem ipsum dolor sit amet consectetur"
        buttonText="Learn More"
      />
      <PartnersSection />

      {/* CtaSection1 */}
      <div className="section-container">
        <Layout>
          <Content style={{ padding: '24px', backgroundColor: "white" }}>
            <CtaSection1 />
          </Content>
        </Layout>
      </div>

      {/* CtaSection2 */}
      <div className="section-container">
        <Layout>
          <Content style={{ padding: '24px', backgroundColor: "white" }}>
            <CtaSection2 />
          </Content>
        </Layout>
      </div>

      {/* OurTeamSection */}
      <OurTeamSection />
     <Footer/>
    </div>
  );
};

export default App;
