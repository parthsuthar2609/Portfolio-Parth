import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Footer from './Components/Footer';
import Experience from './Sections/Experience';
import MySkill from './Sections/MySkill';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  return (
    <Router>
      <Header />
      {!isMenuOpen && <Hero />}
      {isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/myskill" element={<MySkill />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
