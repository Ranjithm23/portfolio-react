import React, { useState } from 'react';
import './MyProjects.css';

const MyProjects = ({ img, title, desc, link }) => {
  const [show, setShow] = useState(false);

  return (
    <a href={link}>
     <div className='project' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
       {show ? (
        <div className='project_content'>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
       ) : (
         <img src={img} alt={title} />
       )}
     </div>
    </a>
  );
};

export default MyProjects;
