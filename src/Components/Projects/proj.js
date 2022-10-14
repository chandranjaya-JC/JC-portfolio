import React from 'react';
import './Projects.css';
import IMG1 from '../../Assets/portfolio1.jpg';
import IMG2 from '../../Assets/portfolio2.jpg';
import IMG3 from '../../Assets/portfolio3.jpg';
import IMG4 from '../../Assets/portfolio4.jpg';
import IMG5 from '../../Assets/portfolio5.png';
import IMG6 from '../../Assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/3686266/file/original-84bfee3230f8e76f9949def6a9abe343.png?compress=1&resize=752x'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts template & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/3686266/file/original-84bfee3230f8e76f9949def6a9abe343.png?compress=1&resize=752x'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/3686266/file/original-84bfee3230f8e76f9949def6a9abe343.png?compress=1&resize=752x'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/3686266/file/original-84bfee3230f8e76f9949def6a9abe343.png?compress=1&resize=752x'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/3686266/file/original-84bfee3230f8e76f9949def6a9abe343.png?compress=1&resize=752x'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/3686266/file/original-84bfee3230f8e76f9949def6a9abe343.png?compress=1&resize=752x'
  }]

const Proj = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className=" portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__items-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__items-cta">
                  <a href={github} className='btn button'>Github</a>
                  <a href={demo} className='btn button btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Proj