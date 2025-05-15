import React from 'react';
import ProfilePopup from './ProfilePopup';
import bgImage from '../assets/bgimage.png'; // adjust the path if needed

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between h-screen pt-20 bg-[#222831] text-left px-12 relative overflow-hidden"
    >
      {/* Glowing background circle */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[500px] h-[500px] rounded-full bg-white opacity-5 blur-3xl"></div>
      </div>

      {/* Left Side - Text */}
      <div className="flex flex-col justify-center z-10">
        <div className="relative group w-fit">
          <h1 className="text-4xl font-bold text-gray-100 cursor-pointer">Hi, I'm Tanmay</h1>
          <ProfilePopup />
        </div>

        <p className="mt-4 text-lg text-gray-400 max-w-xl">
          A Web Developer passionate about React, AI, and crafting beautiful user experiences.
        </p>

        <div className="mt-6 flex gap-x-4">
          <a
            href="/Tanmay Trivedi Resume.docx (2).pdf"
            download
            className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"
          >
            Resume
          </a>
          <a
            href="https://github.com/TanmayTrivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block z-10">
        <img 
          src={bgImage} 
          alt="Hero Background" 
          className="w-[500px] h-auto opacity-80 mix-blend-screen" 
        />
      </div>
    </section>
  );
};

export default HeroSection;