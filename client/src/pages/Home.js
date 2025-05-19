import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import ProjectsPreview from '../components/Projects';
// import ContactCTA from '../components/ContactCTA';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsPreview />
      <About />
      {/* <About />
      <ProjectsPreview />
      <ContactCTA />
      <Footer /> */}
    </div>
  );
};

export default Home;
