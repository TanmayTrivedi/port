import React from 'react';
import profileImage from '../assets/profileimage1.jpg';

const ProfilePopup = () => {
    return (
        <div className="absolute left-full top-0 ml-8 w-[600px] bg-[#222831] text-white p-6 rounded-2xl shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-50 pointer-events-none group-hover:pointer-events-auto border-[#80f0e9] border-[3px]">
        <div className="flex items-center space-x-4 mb-4">
        <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full shadow"/>
          <div>
            <p className="text-xl font-semibold">Tanmay Trivedi</p>
            <p className="text-lg text-gray-400">Web Developer</p>
          </div>
        </div>
        <div className="text-lg space-y-2">
          <p><strong>Education:</strong> MCA, VIT University / Bsc(CS & IT), NV Patel University</p>
          <p><strong>Email:</strong> tanmayrishu1112@gmail.com</p>
          <p><strong>Location:</strong> Banswara, Rajasthan, India</p>
          <p><strong>Technologies:</strong> React, Tailwind, Node.js, AI, Python</p>
          <p><strong>Interests:</strong> UI/UX Design, Automation, Open Source</p>
        </div>
      </div>
    );
  };
  
export default ProfilePopup;