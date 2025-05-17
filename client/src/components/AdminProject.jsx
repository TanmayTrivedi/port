import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust path if needed
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';

const AdminProjectPage = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    image: '',
    github: '',
    live: '',
    tags: '',
  });

  const [projects, setProjects] = useState([]);

  // Fetch existing projects
  const fetchProjects = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'projects'));
      const fetchedProjects = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(fetchedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  // Upload new project
  const handleUpload = async () => {
    try {
      const newProject = {
        ...projectData,
        tags: projectData.tags.split(',').map(tag => tag.trim().toLowerCase()),
      };

      await addDoc(collection(db, 'projects'), newProject);
      alert('Project added successfully!');
      setProjectData({
        title: '',
        description: '',
        image: '',
        github: '',
        live: '',
        tags: '',
      });
      fetchProjects(); // refresh list
    } catch (error) {
      console.error('Error uploading project:', error);
      alert('Failed to upload project.');
    }
  };

  // Delete a project
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, 'projects', id));
      alert('Project deleted!');
      fetchProjects(); // refresh list
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project.');
    }
  };

  return (
    <div className="bg-[#222831] min-h-screen text-white px-6 py-10">
      <h2 className="text-2xl text-[#80f0e9] font-bold mb-6">Admin Project Manager</h2>

      {/* Add Project */}
      <div className="grid gap-4 max-w-xl mx-auto mb-10">
        {['title', 'description', 'image', 'github', 'live', 'tags'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={projectData[field]}
            onChange={handleChange}
            className="p-3 rounded-lg text-black"
          />
        ))}

        <button
          onClick={handleUpload}
          className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition-transform duration-300 hover:scale-105"
        >
          Upload Project
        </button>
      </div>

      {/* Existing Projects List */}
      <div className="max-w-4xl mx-auto grid gap-6">
        <h3 className="text-xl font-semibold text-center text-[#80f0e9] mb-4">Existing Projects</h3>

        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-[#80f0e9] p-4 rounded-lg bg-[#393E46] shadow-md"
          >
            <h4 className="text-lg font-bold">{project.title}</h4>
            <p className="text-sm text-gray-300 mb-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white text-[#222831] px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm underline text-[#80f0e9]">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm underline text-[#80f0e9]">
                  Live Demo
                </a>
              )}
              <button
                onClick={() => handleDelete(project.id)}
                className="ml-auto px-4 py-1 text-sm bg-red-500 hover:bg-red-600 rounded text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjectPage;
