import React from 'react';
import ProfilePopup from './ProfilePopup';

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col items-start justify-center h-screen pt-20 bg-[#222831] text-left pl-12 relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[500px] h-[500px] rounded-full bg-white opacity-5 blur-3xl"></div>
      </div>

      {/* Wrap ONLY the name in a div with hover logic */}
      <div className="relative group">
  <h1 className="text-4xl font-bold text-gray-100 cursor-pointer">Hi, I'm Tanmay</h1>
  <ProfilePopup />
</div>


      <p className="mt-4 text-lg text-gray-400 max-w-xl z-10">
        A Web Developer passionate about React, AI, and crafting beautiful user experiences.
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-2 border-[3px] border border-[#80f0e9] bg-[#222831] text-white rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition "
      >
        View My Work
      </a>
    </section>
  );
};

export default HeroSection;