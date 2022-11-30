import React from 'react';
import './Skills.css';
import {DiHtml5,DiCss3,DiJavascript,DiReact,DiSass,DiBootstrap,DiNodejsSmall,DiMongodb} from 'react-icons/di';
import {SiExpress,SiFirebase,SiJavascript} from 'react-icons/si'


const Skillsss = () => {
  return (
    <div className='blob'>
          <section id="skills" className='skills '>
      <h5>What i know</h5>
      <h2>Skills</h2>
      <div className="skills__container">
        <article  className='skills__items'>
            <h3>Front End</h3>
                <div className="skills__items-cta">
                    <h2><span className="skills__items-icons"><DiHtml5 /></span>HTML 5</h2>
                    <h2><span className="skills__items-icons"><DiCss3 /></span>CSS 3</h2>
                    <h2><span className="skills__items-icons"><SiJavascript /></span>JavaScript</h2>
                    <h2><span className="skills__items-icons"><DiReact /></span>React JS</h2>
                    <h2><span className="skills__items-icons"><DiSass /></span>Sass</h2>
                    <h2><span className="skills__items-icons"><DiBootstrap /></span>Bootstrap</h2>
                </div>
        </article>
        <article  className='skills__items'>
            <h3>Back End</h3>
                <div className="skills__items-cta">
                    <h2><span className="skills__items-icons"><DiNodejsSmall /></span>Node JS</h2>
                    <h2><span className="skills__items-icons"><SiExpress /></span>Express</h2>
                    <h2><span className="skills__items-icons"><DiMongodb /></span>MongoDB</h2>
                    <h2><span className="skills__items-icons"><SiFirebase /></span>Firebase</h2>
                </div>
        </article>
    </div>
    </section>

    </div>

  )
}

export default Skillsss