import React, { useState } from 'react';
import './ExperienceContainer.css';
import expimg from "../Experience-Letter.jpg"

const ExperienceContainer = () => {
  const [showLetter, setShowLetter] = useState(false);

  const handleClick = () => {
    setShowLetter(!showLetter);
  };

  return (
    <div className='experience-container' id='exp'>
      <h1>Experience</h1>
      <div className='experience-box'>
        <h3>Valor Paytech</h3>
        <h4>Operational Analyst</h4>
        <p>
          Worked as an Operational Analyst, reviewing and verifying customer identification, bank documents, and other relevant details.<br />
          Once all the information was confirmed, I proceeded with the next steps.
        </p>
      </div>
      <div className='experience-buttons'>
        <button className='experience-button'>April-2024</button>
        <button className='experience-button'>August-2024</button>
      </div>
      <button className='experience-button' onClick={handleClick}>
        {showLetter ? 'Hide Experience Letter' : 'View Experience Letter'}
      </button>
      {showLetter && (
        <div className="letter-container">
          <img 
            src={expimg}
            alt="Experience Letter" 
            className="experience-letter-image"
          />
        </div>
      )}
    </div>
  );
};

export default ExperienceContainer;