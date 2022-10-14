import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/NavBar/Navbar'
import Socials from '../../Components/Socials/Socials'
import Testi from '../../Components/Testimonials/Testi'
import Cont from '../../Components/Contact/Cont';

function Testimonials() {
  return (
    <div>
      <Navbar />

      <Testi />
      <Cont />
      <Footer />
      <Socials />
    </div>
  )
}

export default Testimonials