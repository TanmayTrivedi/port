import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects';
import ContactSection from './components/ContactSection';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <Navbar 
        setShowProjects={setShowProjects}
        setIsProfileOpen={setIsProfileOpen}
        setShowContact={setShowContact}
      />
      <HeroSection 
        isProfileOpen={isProfileOpen} 
        setIsProfileOpen={setIsProfileOpen} 
      />
      {showProjects && <ProjectsSection />}
      {showContact && <ContactSection />}
    </>
  );
}

export default App;