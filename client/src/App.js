import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/Projects';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutPage'; // This is the AboutPage component
import BlogSection from './components/BlogSection';
import BlogDetails from './components/BlogDetails';
import AdminDashboard from './components/AdminDashboard';

// AdminWrapper for /admin route
const AdminWrapper = () => {
  const [activeSection, setActiveSection] = useState('admin');
  return <AdminDashboard setActiveSection={setActiveSection} />;
};

function MainApp() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  return (
    <>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />

      {activeSection === 'home' && <HeroSection />}
      {activeSection === 'projects' && <ProjectsSection />}
      {activeSection === 'contact' && <ContactSection />}
      {activeSection === 'about' && (
        <AboutSection setActiveSection={setActiveSection} />
      )}
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
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin" element={<AdminWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
