import React from "react";
import one from "./assets/1.jpg";
import two from "./assets/2.png";
import three from "./assets/3.jpg";
import four from "./assets/4.png";
import five from "./assets/5.jpg";
import six from "./assets/6.jpg";
import seven from "./assets/7.jpg";
import eight from "./assets/8.jpg";
import nine from "./assets/9.jpg";
import ten from "./assets/10.png";
import eleven from "./assets/11.jpg";
import twelve from "./assets/12.jpg";

const Stacker = ({ zodiacNumber }) => {
  
  
  const zodiacImages = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
  ];

  return (
    <div>
      <h1 className="titlee">Find Out Your Zodiac Sign</h1>
      <div className="stack-cards">
       
        {zodiacImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Zodiac ${index + 1}`}
            className={zodiacNumber === index + 1 ? 'scale-up' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Stacker;
