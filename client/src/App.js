import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutPage';
import BlogSection from './components/BlogSection';
import BlogDetails from './components/BlogDetails';
import AdminDashboard from './components/AdminDashboard';
// ✅ corrected

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBlogId, setSelectedBlogId] = useState(null);

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
       <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        {/* ...other routes */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
