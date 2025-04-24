import React from 'react';

const projects = [
  {
    title: 'AI-Powered Portfolio',
    description: 'A personal portfolio enhanced with AI features for interactivity and user insights.',
    tech: ['React', 'Tailwind', 'OpenAI'],
    link: '#', // Add actual links
  },
  {
    title: 'Crime Data Analytics',
    description: 'Visualized crime statistics using Power BI and Python for LA city data.',
    tech: ['Python', 'Power BI'],
    link: '#',
  },
  {
    title: 'Calculator-Using Python GUI',
    description: 'Visualized crime statistics using Power BI and Python for LA city data.',
    tech: ['Tkinter'],
    link: 'https://github.com/TanmayTrivedi/Project.git',
  },
  {
    title: 'Blood Donor App',
    description: 'Direct communication platform between donors and receivers for emergencies.',
    tech: ['Pug', 'NodeJS','Mongoose'],
    link: 'https://github.com/TanmayTrivedi/BloodMate.git',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#393E46] text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#222831] p-6 rounded-xl border-[3px] border-[#80f0e9] shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-[#80f0e9] text-[#222831] px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-[#80f0e9] underline text-sm hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
