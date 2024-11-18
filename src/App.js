import React, { useState } from "react";
import Stacker from "./stacker";
import Randomnum from "./random-num";

function App() {
  const [revealer, setZodiac] = useState(0);

  const zodiaNames =["Aries","Taurus","Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricornus", "Aquarius", "Pisces"]

  const zodiac = () => { const randomNum = Math.floor(Math.random() * 12) + 1;
    setZodiac(randomNum); 
  };

  const spinner = () => {
    setZodiac(0); 
  };

  return (
    <div className="container">
      <Stacker zodiacNumber={revealer} />
      <Randomnum
        zodiac={zodiac}
        spinner={spinner}
        revealer={revealer}
        zodiacName={revealer !== 0 ? zodiaNames[revealer - 1] : ""}
      />
    </div>
  );
}

export default App