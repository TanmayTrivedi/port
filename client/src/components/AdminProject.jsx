import React, { useState } from 'react';
import { db } from '../firebase'; // adjust path if needed
import { collection, addDoc } from 'firebase/firestore';

const AdminProjectPage = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    image: '',
    github: '',
    live: '',
    tags: '',
  });

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = async () => {
    try {
      const newProject = {
        ...projectData,
        tags: projectData.tags.split(',').map(tag => tag.trim().toLowerCase()), // convert comma string to array
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
    } catch (error) {
      console.error('Error uploading project:', error);
      alert('Failed to upload project.');
    }
  };

  return (
    <div className="bg-[#222831] min-h-screen text-white px-6 py-10">
      <h2 className="text-2xl text-[#80f0e9] font-bold mb-6">Add New Project</h2>

      <div className="grid gap-4 max-w-xl mx-auto">
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
    </div>
  );
};

export default AdminProjectPage;
