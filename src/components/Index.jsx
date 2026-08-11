import React from "react";
import "./style.css";

const LampEffect = () => {
  return (
    <div className="container">
      <div className="lamp">
        <div className="glow-small"></div>
        <div className="line"></div>
        <div className="back"></div>
        <div className="glow-big"></div>
      </div>

      <div className="text">
        <h1>
          Lamp Effect <br />
          Inspired by Aceternity's Design
        </h1>
      </div>
    </div>
  );
};

export default LampEffect;