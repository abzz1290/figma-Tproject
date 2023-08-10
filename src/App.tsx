import React, { FC } from 'react';
import './App.css';
import Header from "./components/header";
import HeroSection from "./components/HeroSection";

const App: FC = () => {
  return (
    <div className="App">
      <Header title="Start" />
      <HeroSection
        subHeading="Welcome to our website"
        heading="Discover Amazing Content"
        buttonText="Learn More"
      />
      {/* Other content */}
    </div>
  );
};

export default App;
