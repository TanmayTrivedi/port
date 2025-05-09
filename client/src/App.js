import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutPage';
import BlogSection from './components/BlogSection';
import BlogDetails from './components/BlogDetails';
import AdminBlogPage from './components/AdminBlogPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      console.log('Key pressed:', e.key); // Debug log
      if (e.key === 'F2') {
        console.log('Admin shortcut triggered');
        setShowAdminPanel(true);
        setActiveSection('admin');
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />

      {activeSection === 'home' && <HeroSection />}
      {activeSection === 'projects' && <ProjectsSection />}
      {activeSection === 'contact' && <ContactSection />}
      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'blog' && (
        <BlogSection
          setActiveSection={setActiveSection}
          setSelectedBlogId={setSelectedBlogId}
        />
      )}
      {activeSection === 'blogDetails' && (
        <BlogDetails
          blogId={selectedBlogId}
          setActiveSection={setActiveSection}
        />
      )}
      {activeSection === 'admin' && showAdminPanel && (
        <AdminBlogPage setActiveSection={setActiveSection} />
      )}
    </>
  );
}

export default App;
