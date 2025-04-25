import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const projectsRef = useRef(null);

  // Scroll into view when project section is set to show
  useEffect(() => {
    if (showProjects && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showProjects]);

  return (
    <>
      <Navbar 
        setShowProjects={setShowProjects}
        setIsProfileOpen={setIsProfileOpen}
      />
      <HeroSection 
        isProfileOpen={isProfileOpen} 
        setIsProfileOpen={setIsProfileOpen} 
      />
      {showProjects && (
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
      )}
    </>
  );
}

export default App;
