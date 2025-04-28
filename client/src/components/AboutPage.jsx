import React from 'react';

const AboutPage = ({ setActiveSection }) => {
  return (
    <section id="about" className="min-h-screen bg-[#222831] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        {/* Introduction */}
        <div className="text-center mb-10">
          <p className="text-lg text-gray-400 leading-relaxed">
            Hey there! 👋 I'm <span className="text-[#80f0e9] font-semibold">Tanmay Trivedi</span>, a passionate web developer
            who loves building beautiful and functional websites. I specialize in React, Tailwind CSS, and am deeply fascinated
            by the world of AI and modern web technologies.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-[#80f0e9]">Tech Stack</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <li>⚛️ React.js</li>
            <li>🎨 Tailwind CSS</li>
            <li>🧠 AI Tools</li>
            <li>🌐 HTML5 & CSS3</li>
            <li>⚡ JavaScript (ES6+)</li>
            <li>📊 Power BI (Basics)</li>
          </ul>
        </div>

        {/* What I'm working on */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-[#80f0e9]">Currently Working On</h3>
          <p className="text-gray-400 leading-relaxed">
            Building an AI-enhanced developer portfolio, exploring new front-end frameworks, and diving deeper into full-stack development with Node.js!
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-[#80f0e9]">Achievements</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Completed several front-end projects using React & Tailwind CSS.</li>
            <li>Published insightful blog posts on modern web development trends.</li>
            <li>Actively participating in hackathons and open-source projects.</li>
          </ul>
        </div>

        {/* Fun Fact */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4 text-[#80f0e9]">Fun Fact</h3>
          <p className="text-gray-400 leading-relaxed">
            When I'm not coding, you'll find me exploring new tech, sketching UI designs, or getting lost in strategy games!
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
        <button
            onClick={() => setActiveSection('contact')}
            className="inline-block bg-[#222831] border border-[#80f0e9] border-[3px] text-white font-semibold py-3 px-8 rounded-full hover:text-[#222831] hover:bg-[#80f0e9] hover:scale-105 transition-transform duration-300"
          >
            Let's Collaborate
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutPage;
