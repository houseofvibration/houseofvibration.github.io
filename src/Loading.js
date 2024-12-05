import React from "react";
import "./Loading.css";
import hovPng from "./static/hov.png"; // Import the PNG image

function Loading({ onEnter }) {
  return (
    <div className="loading-container">
      <div className="loading-content">
      <button className="enter-button" onClick={onEnter}>
        <img src={hovPng} alt="House of Vibration Logo" className="hov-image" />
        </button>
      </div>
    </div>
  );
}

export default Loading;
