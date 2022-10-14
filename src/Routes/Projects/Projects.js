import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/NavBar/Navbar'
import Proj from '../../Components/Projects/proj'
import Socials from '../../Components/Socials/Socials'
import Cont from '../../Components/Contact/Cont';

function Projects() {
  return (
    <div>
      <Navbar />

      <Proj />
      <Cont />
      <Footer />
      <Socials />
    </div>
  )
}

export default Projects