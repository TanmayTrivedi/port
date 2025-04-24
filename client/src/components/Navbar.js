import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-fit mx-auto mt-4 px-6 py-4 flex justify-between items-center rounded-full shadow-md bg-[#222831] border-[3px] border-[#80f0e9] fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex space-x-6 text-white font-medium">
        <li><a href="#home" className="hover:text-[#80f0e9]">Home</a></li>
        <li><a href="#about" className="hover:text-[#80f0e9]">About</a></li>
        <li><a href="#projects" className="hover:text-[#80f0e9]">Projects</a></li>
        <li><a href="#contact" className="hover:text-[#80f0e9]">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
