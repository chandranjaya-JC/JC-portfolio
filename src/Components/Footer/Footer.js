import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { BsGithub,BsBook,BsInstagram, BsWhatsapp,BsLinkedin } from 'react-icons/bs'
import { AiOutlineFolderOpen, AiOutlineMail } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi'
import JCLOGO from '../../Assets/JCwebplotlogo11.png'

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__container'>
        <div className='footer__container__location'>
          <h1>Find ME Here..!</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501292.9528639934!2d76.68703842138045!3d11.012255251500644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sid!4v1664790964738!5m2!1sen!2sid"
            frameBorder="1"
            title='map'
            style={{ border: "0.2px solid black" }}
            allowFullScreen=""
            aria-hidden="true"
            tabIndex="0"
            className='footer__container__location__map'
          />
        </div>
        <div className='footer__container__menu'>
          <h1>Menu</h1>
          <div className='footer__container__menu__div'>
          <Link to='/' className='menu-listlink'><BiHome className='menu-listicons' />Home</Link>
          <Link to='/skills' className='menu-listlink'><BsBook className='menu-listicons' />Skills</Link>
          <Link to='/projects' className='menu-listlink'><AiOutlineFolderOpen className='menu-listicons' />Projects</Link>
          <Link to='/testimonials' className='menu-listlink'><FiUsers className='menu-listicons' />Testimonials</Link>
          <Link to='/contact' className='menu-listlink'><AiOutlineMail className='menu-listicons' />Contact</Link>
          </div>
        </div>
        <div className='footer__container__socials'>
          <h1>Socials</h1>
          <a href="mailto:chandranjaya427@gmail.com"><AiOutlineMail /></a>
          <a href="https://wa.me/https://www.instagram.com/_biker_with_one_down_five_up_"><BsInstagram /></a>
          <a href="https://wa.me/919080515514"><BsWhatsapp /></a>
          <a href="https://www.linkedin.com/in/jaya-chandran-palanisamy-40337621b/"><BsLinkedin /></a>
          <a className='socials__container__a' href="https://github.com/chandranjaya-JC"><BsGithub /></a>
        </div>
      </div>
      <div className='powered__by'>
        <h1>Powered by</h1><img src={JCLOGO} alt="hi" />
      </div>
    </section>

  )
}

export default Footer;

