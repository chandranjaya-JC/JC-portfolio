import React from 'react';
import './Header.css';
import JCLOGO from '../../Assets/JCwebplotlogo11.png'
import CV from '../../Assets/cv.pdf'
import { Link } from 'react-router-dom';

function Header() {
  return (

    <section className='header'>

      <div className='header__heading'>
        {/* <img src={JCLOGO} alt="logo"/> */}
        <h1>HI, I'M <span>JayaChandran</span></h1>
        <h3>Frontend Developer</h3>
      </div>
      <div className='header__container'>
        <a href={CV} download className='button btn' >Download CV</a>
        <Link to='/contact' className='button btn'>Let's Talk</Link>
      </div>

    </section>
  )
}

export default Header