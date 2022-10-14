import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import {BiHome} from 'react-icons/bi';
import {BsBook} from 'react-icons/bs'
import {AiOutlineFolderOpen ,AiOutlineMail } from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi'

function Navbar() {
  return (
    <nav className='nav-container'>
        <ul className='nav-list'>
          <li >
            <Link to='/' className='nav-listlink'><BiHome className='nav-listicons'/></Link>
          </li>
          <li>
            <Link to='/skills' className='nav-listlink'><BsBook className='nav-listicons'/></Link>
          </li>
          <li>
            <Link to='/projects' className='nav-listlink'><AiOutlineFolderOpen className='nav-listicons'/></Link>
          </li>
          <li>
            <Link to='/testimonials' className='nav-listlink'><FiUsers className='nav-listicons'/></Link>
          </li>
          <li>
            <Link to='/contact' className='nav-listlink'><AiOutlineMail className='nav-listicons'/></Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar;