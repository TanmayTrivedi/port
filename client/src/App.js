import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutPage';
import BlogPage from './components/BlogPage'; // Updated import

function App() {
  const [activeSection, setActiveSection] = useState('home'); 

  return (
    <>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />

      {activeSection === 'home' && <HeroSection />}
      {activeSection === 'projects' && <ProjectsSection />}
      {activeSection === 'contact' && <ContactSection />}
      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'blog' && <BlogPage setActiveSection={setActiveSection} />}
    </>
  );
}

export default App;
