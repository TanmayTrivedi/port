const Navbar = ({ setActiveSection, activeSection }) => {
  return (
    <nav
      className={`fixed top-4 ${
        activeSection === 'home' ? 'left-1/2 -translate-x-1/2' : 'left-12 translate-x-0'
      } w-fit mx-auto mt-4 px-6 py-4 flex justify-between items-center rounded-full shadow-md bg-[#222831] border-[3px] border-[#80f0e9] z-50 transition-all duration-300`}
    >
      <ul className="flex space-x-6 text-white font-medium ">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('home');
            }}
            className="hover:text-[#80f0e9] hover:scale-105"
          >
            Home
          </a>
        </li>
        <li>
        <button
         onClick={() => setActiveSection('blog')} className="hover:text-[#80f0e9] hover:scale-105 transition-all duration-150"
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
      </ul>
    </nav>
  );
};

export default Navbar;
