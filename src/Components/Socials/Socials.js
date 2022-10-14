import React from 'react'
import { BsInstagram,BsWhatsapp,BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import './Socials.css';
import { BsGithub } from 'react-icons/bs';

function Socials() {
  return (
    <div className='socials__container'>
        <p />
        <a className='socials__container__a' href="https://www.instagram.com/_biker_with_one_down_five_up_"><AiOutlineMail /></a>
        <a className='socials__container__a' href="https://wa.me/https://www.instagram.com/_biker_with_one_down_five_up_"><BsInstagram /></a>
        <a className='socials__container__a' href="https://wa.me/919080515514"><BsWhatsapp /></a>
        <a className='socials__container__a' href="https://www.linkedin.com/in/jaya-chandran-palanisamy-40337621b/"><BsLinkedin /></a>
        <a className='socials__container__a' href="https://github.com/chandranjaya-JC"><BsGithub /></a>
        <p />
    </div>
  )
}
export default Socials