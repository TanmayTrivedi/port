import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // adjust the path if needed

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const fetchedProjects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(fetchedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

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

            {project.github || project.live ? (
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
