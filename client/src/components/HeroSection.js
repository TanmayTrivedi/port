import React from 'react';
import ProfilePopup from './ProfilePopup';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-start justify-center h-screen pt-20 bg-[#222831] text-left pl-12 relative overflow-hidden"
    >
      {/* Glowing background circle */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[500px] h-[500px] rounded-full bg-white opacity-5 blur-3xl"></div>
      </div>

      {/* Name with ProfilePopup */}
      <div className="relative group z-10">
        <h1 className="text-4xl font-bold text-gray-100 cursor-pointer">Hi, I'm Tanmay</h1>
        <ProfilePopup />
      </div>

      {/* Subtext */}
      <p className="mt-4 text-lg text-gray-400 max-w-xl ">
        A Web Developer passionate about React, AI, and crafting beautiful user experiences.
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-x-4 z-10">
        <a
          href="https://docs.google.com/document/d/1HKeTiqKECWdScRVo1p_-yLKb0YpPoKSL/edit?usp=sharing&ouid=108235974918647442305&rtpof=true&sd=true" // Replace with your resume link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition"
        >
          Resume
        </a>
        <a
  href="https://github.com/TanmayTrivedi"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition"
>
  GitHub
</a>

      </div>
    </section>
  );
};

export default HeroSection;
