import React from 'react';
import "./Topcontent.css";
const Topcontent = () => {
  return (
    <div className='topcontent'>
      <div className='topcontent_container'>
        <h1>Ranjith M</h1>
        <p>A Professional Web Developer</p>
        <a herf="www.google.com">
          <button className='topcontent_downloadbutton'>Download CV</button>
        </a>
          {/* <link to="project" smooth={true} duration={500}> */}
         <button className='topcontent_webbutton'>My Work</button>
          {/* </link> */}
      </div>
    </div>
  )
}

export default Topcontent
