import React from 'react';
import Topcontent from './Topcontent';
import "./Topcontainer.css";

const Topcontainer = () => {
  return (
    <div>
      <div name="about" className='topcontainer'>
        <Topcontent/>
      </div>
    </div>
  )
}

export default Topcontainer;
