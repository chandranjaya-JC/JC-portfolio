import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/NavBar/Navbar'
import Socials from '../../Components/Socials/Socials'
import Cont from '../../Components/Contact/Cont';
import Testi from '../../Components/Testimonials/Testi'
import Proj from '../../Components/Projects/proj'
import Skillsss from '../../Components/Skills/Skillsss'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Skillsss />
      <Proj />
      <Testi />
      <Cont />
      <Footer />
      <Socials />
    </div>
  )
}

export default Home