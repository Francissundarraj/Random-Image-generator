import React from "react";
import container from "./assets/C-2.jpg";

const Randomnum = ({ zodiac, spinner, revealer,zodiacName  }) => {
  return (
    <div className="num-container">
      <img src={container} alt="Container" />
      <h2>Random Number Matches Horoscope</h2>
      <p>{revealer}</p>
      <h3>Your Zodiac Sign is  : <span className="zodarname">{zodiacName }</span></h3>
      <button className="num-container_btn1" onClick={zodiac}>Reveal My Star</button>
      <button className="num-container_btn2" onClick={spinner}>Spin Again</button>
    </div>
  );
};

export default Randomnum;
