import React, { FC } from 'react';
import './App.css';
import Header from "./components/header";


const App: FC = () => {
  return (
    <div className="App">
      <Header title="Start" />
      {/* Other content */}
    </div>
  );
};

export default App;
