import React, { useState, useEffect } from 'react';

const Navbar = ({ setActiveSection, activeSection }) => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideNavbar(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 ${
        activeSection === 'home' ? 'left-1/2 -translate-x-1/2' : 'left-12 translate-x-0'
      } w-fit mx-auto px-6 py-4 flex justify-between items-center rounded-full shadow-md bg-[#222831] border-[3px] border-[#80f0e9] z-50 transition-all duration-300 ${
        hideNavbar ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <ul className="flex space-x-6 text-white font-medium">
        <li>
          <button
            onClick={() => setActiveSection('home')}
            className="hover:text-[#80f0e9] hover:scale-105 transition-all duration-150"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('blog')}
            className="hover:text-[#80f0e9] hover:scale-105 transition-all duration-150"
          >
            Blog
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('about')}
            className="hover:text-[#80f0e9] hover:scale-105 transition-all duration-150"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('projects')}
            className="hover:text-[#80f0e9] hover:scale-105 transition-all duration-150"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('contact')}
            className="hover:text-[#80f0e9] hover:scale-105 transition-all duration-150"
          >
            Contact
          </button>
        </li>
        {/* No Admin button shown publicly */}
      </ul>
    </nav>
  );
};

export default Navbar;