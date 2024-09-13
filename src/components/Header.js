import React from 'react';
import "./Header.css";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
      <h1>Develop<span>er</span></h1>
      </div> 
      <div className='header_right'>
      <Link to='about' smooth={true} duration={500}>
      <h4>About us </h4>
      </Link>
      <Link to="skills" smooth={true} duration={500}>
      <h4>Skills </h4>
      </Link>
      <Link to="projects" smooth={true} duration={500}>
      <h4>Projects </h4>
      </Link>
      <Link to="exp" smooth={true} duration={500}>
      <h4>Experience </h4>
      </Link>
      <Link to="contact" smooth={true} duration={500}>
      <h4>Contact </h4>
      </Link>
      <Link className='certificate' to='certify'>Certificate</Link>
      <a href='https://www.msn.com/en-in/autos/news/following-goat-success-director-venkat-prabhu-becomes-a-proud-owner-of-a-brand-new-luxury-car-worth-rs-86-lakh/ar-AA1qt7i9?ocid=msedgntp&pc=ASTS&cvid=539ea29ec4ce4136a7fbce9493b4a224&ei=12' id='certify'></a>
      </div>  
    </div>
  );
};

export default Header;
