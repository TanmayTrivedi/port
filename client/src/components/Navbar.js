import React from 'react';

const Navbar = ({ setShowProjects, setIsProfileOpen, setShowContact }) => {
  return (
    <nav className="w-fit mx-auto mt-4 px-6 py-4 flex justify-between items-center rounded-full shadow-md bg-[#222831] border-[3px] border-[#80f0e9] fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex space-x-6 text-white font-medium">
        <li>
      <a 
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setShowProjects(false);
    setIsProfileOpen(false);
    const homeSection = document.getElementById('home');
    if (homeSection) {
     document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });

    }
  }}
  className="hover:text-[#80f0e9]"
>
  Home
</a>
</li>
        <li>
          <a href="#about" className="hover:text-[#80f0e9]">About</a>
        </li>
        <li>
          <button 
            onClick={() => {
              setShowProjects(true);
              setIsProfileOpen(false);

              setTimeout(() => {
                const projectSection = document.getElementById('projects');
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100); // Give time for ProjectsSection to mount
            }}
            className="hover:text-[#80f0e9]"
          >
            Projects
          </button>
        </li>
        <li>
          <button 
            onClick={() => {
              setShowContact(true);
              setShowProjects(false);
              setIsProfileOpen(false);
            }}
            className="hover:text-[#80f0e9]"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
