import { FC } from "react";
import { Layout } from 'antd';
import "./App.css";
import Header from "./components/header/header";
import HeroSection from "./components/herosection/HeroSection";
import PartnersSection from "./components/brandsection/PartnersSection";
import OurTeamSection from "./components/teamsection/OurTeamSection"; 
import Footer from "./components/footer/Footer";
import CallToActionWithImage from "./components/ctasections/CallToActionWithImage";
import CallToActionWithImageReversed from "./components/ctasections/CallToActionWithImageReversed";

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
            <CallToActionWithImage />
          </Content>
        </Layout>
      </div>

      {/* CtaSection2 */}
      <div className="section-container">
        <Layout>
          <Content style={{ padding: '24px', backgroundColor: "white" }}>
            <CallToActionWithImageReversed />
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
