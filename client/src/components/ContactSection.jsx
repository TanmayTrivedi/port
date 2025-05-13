import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';

const ContactSection = () => {
  useEffect(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 px-6 bg-[#222831] text-white animate-fadeIn"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center text-gray-400 mb-10">
        Let’s connect! Reach out to me through any of these platforms:
      </p>

      <div className="flex justify-center gap-8 text-4xl">
        <a
          href="https://github.com/TanmayTrivedi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#80f0e9] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tanmay-trivedi-17350532a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#80f0e9] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://dribbble.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#80f0e9] transition"
        >
          <FaDribbble />
        </a>
      </div>

      <div className="my-8 border-t border-gray-600 w-1/2 mx-auto"></div>

      <div className="flex justify-center">
        <a 
          href="mailto:tanmayrishu1112@gmail.com"  // ✅ Replace with your actual email
          className="mt-6 inline-block border border-[#80f0e9] border-[3px] bg-[#222831] text-white font-bold py-3 px-6 rounded-full hover:bg-[#80f0e9] transition-transform transform hover:text-[#222831] hover:scale-105"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
