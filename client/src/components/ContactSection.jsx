import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#222831] text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center text-gray-400 mb-10">Let’s connect and talk about your project or ideas!</p>

      <form className="max-w-2xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-[#393E46] text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-[#393E46] text-white placeholder-gray-400 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded bg-[#393E46] text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-2 px-6 py-3 border-[3px] border-[#80f0e9] bg-[#222831] text-white rounded-full hover:bg-[#80f0e9] hover:text-[#222831] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
