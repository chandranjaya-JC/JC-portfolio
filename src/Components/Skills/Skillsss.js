import React from 'react';
import './Skills.css';

const Skillsss = () => {
  return (
    <section id="skills">
      <h5>What i know</h5>
      <h2>Skills</h2>
      <div className="skills__container">
        <article  className='skills__items'>
            <h3>Front End</h3>
                <div className="skills__items-cta">
                    <h2>HTML 5</h2>
                    <h2>CSS 3</h2>
                    <h2>JavaScript</h2>
                    <h2>React JS</h2>
                    <h2>Sass</h2>
                    <h2>Bootstrap</h2>
                </div>
        </article>
        <article  className='skills__items'>
            <h3>Back End</h3>
                <div className="skills__items-cta">
                    <h2>Node JS</h2>
                    <h2>Express</h2>
                    <h2>MongoDB</h2>
                </div>
        </article>
    </div>
    </section>
  )
}

export default Skillsss