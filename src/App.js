import React, { useState } from "react";
import "./App.css";
import Loading from "./Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleEnter = () => {
    setIsLoading(false); // Hide loading page and show main content
  };

  if (isLoading) {
    return <Loading onEnter={handleEnter} />;
  }

  return (
    <div className="main-container">
      {/* Content */}
      <div className="content">
        <h1>House Of Vibration</h1>
        <p>If you want to find the secrets of the universe, <br /> think in terms of energy, frequency and vibration.</p>
      </div>
    </div>
  );
}

export default App;
