import React from 'react';
import Cont from '../../Components/Contact/Cont';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/NavBar/Navbar';
import Socials from '../../Components/Socials/Socials';

function Contact() {
  return (
    <div>
      <Navbar />
      <Cont />
      <Footer />
      <Socials />
    </div>
  )
}

export default Contact