import React, { FC } from "react";
import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import CtaSection1 from "./components/CtaSection1";
import CtaSection2 from "./components/CtaSection2";

const App: FC = () => {
  return (
    <div className="App">
      <Header title="Start" />
      <HeroSection
        subHeading="Welcome to our website"
        heading="Discover Amazing Content"
        buttonText="Learn More"
      />
      <PartnersSection />
      <CtaSection1 
        heading={"Discover Amazing Content"}
        content={"Welcome to our website"}
        buttonText={"Learn More"}
      />
      <CtaSection2 
        heading={"Discover Amazing Content"}
        content={"Welcome to our website"}
        buttonText={"Learn More"}
      />
    </div>
  );
};

export default App;
