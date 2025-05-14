import React from 'react';

const projects = [
  {
    id: 'project1',
    title: 'Project',
    description: 'A general-purpose project repository showcasing various experiments and code samples.',
    aiSummary: 'Demonstrates versatility in project structure and code organization.',
    tags: ['React', 'Firebase', 'JavaScript'],
    github: 'https://github.com/TanmayTrivedi/Project',
    live: '', // Add live link if you have one
    linkedin: '', // Add LinkedIn link if you have one
  },
  {
    id: 'project2',
    title: 'Calculator',
    description: 'A simple and responsive calculator app built with React. Supports basic arithmetic operations.',
    aiSummary: 'Highlights UI/UX skills and React component design.',
    tags: ['React', 'Calculator', 'CSS'],
    github: 'https://github.com/TanmayTrivedi/Calculator',
    live: '', // Add live link if you have one
    linkedin: '', // Add LinkedIn link if you have one
  },
  {
    id: 'project3',
    title: 'BloodMate',
    description: 'A blood donation management system to connect donors and recipients efficiently.',
    aiSummary: 'Focuses on solving real-world problems with full-stack development.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/TanmayTrivedi/BloodMate',
    live: '', // Add live link if you have one
    linkedin: '', // Add LinkedIn link if you have one
  },
  {
    id: 'project4',
    title: 'Crime Report',
    description: 'A platform for reporting and tracking crimes, enhancing community safety and awareness.',
    aiSummary: 'Emphasizes backend integration and secure data handling.',
    tags: ['React', 'Express', 'Security'],
    github: 'https://github.com/TanmayTrivedi/crime-report',
    live: '', // Add live link if you have one
    linkedin: '', // Add LinkedIn link if you have one
  },
  {
    id: 'project5',
    title: 'Portfolio',
    description: 'A personal portfolio website to showcase projects, skills, and experience.',
    aiSummary: 'Demonstrates personal branding and web development expertise.',
    tags: ['React', 'Portfolio', 'CSS'],
    github: 'https://github.com/TanmayTrivedi/port',
    live: '', // Add live link if you have one
    linkedin: '', // Add LinkedIn link if you have one
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-[#222831] text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id || index}
            className={`group ${
              project.title === 'Stylish Project Card'
                ? 'bg-[#00ADB5] text-white'
                : 'bg-[#222831] text-white'
            }
            p-6 rounded-xl border-[3px] border-[#80f0e9] hover:bg-[#80f0e9] hover:text-[#222831] shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#222831]">{project.title}</h3>
            <p className="text-sm text-gray-100 mb-4 group-hover:text-[#222831]">{project.description}</p>

            {project.aiSummary && (
              <p className="text-sm text-gray-400 mb-2 italic group-hover:text-[#393E46]">
                AI Summary: {project.aiSummary}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white text-[#222831] px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(project.github || project.live || project.linkedin) ? (
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-white underline text-sm group-hover:text-[#222831]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="text-white underline text-sm group-hover:text-[#222831]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.linkedin && (
                  <a
                    href={project.linkedin}
                    className="text-white underline text-sm group-hover:text-[#222831]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            ) : (
              <p className="text-sm italic text-gray-400">No links provided</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
