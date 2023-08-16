import React, { FC } from "react";
import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection"; 

const App: FC = () => {
  return (
    <div className="App">
      <Header title="Start" />
      <HeroSection
        subHeading="Welcome to our website"
        heading="Discover Amazing Content"
        buttonText="Learn More"
      />
      <PartnersSection /> {/* Add the PartnersSection component */}
      {/* Other content */}
    </div>
  );
};

export default App;
