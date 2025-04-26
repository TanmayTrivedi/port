import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home'); 
  // 'home' | 'projects' | 'contact'

  return (
    <>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />

      
      {activeSection === 'home' && <HeroSection />}
      {activeSection === 'projects' && <ProjectsSection />}
      {activeSection === 'contact' && <ContactSection />}
    </>
  );
}

export default App;
