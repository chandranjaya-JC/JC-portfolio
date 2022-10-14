import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Home from './Routes/Home/Home';
import Projects from './Routes/Projects/Projects';
import Skills from './Routes/Skills/Skills';
import Contact from './Routes/Contact/Contact';
import Testimonials from './Routes/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
