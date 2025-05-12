import React, { useState } from 'react';
import AdminBlogPage from './AdminBlogPage';
import AdminProject from './AdminProject';

const AdminDashboard = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('blog');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 pt-28">Admin Dashboard</h1>

      <div className="flex space-x-4 mb-6 ">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'blog' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setActiveTab('blog')}
        >
          Blog Admin
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'project' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setActiveTab('project')}
        >
          Project Admin
        </button>
        <button
          className="ml-auto px-4 py-2 bg-red-600 text-white rounded"
          onClick={() => setActiveSection('home')}
        >
          Exit Admin
        </button>
      </div>

      <div>
        {activeTab === 'blog' && <AdminBlogPage />}
        {activeTab === 'project' && <AdminProject />}
      </div>
    </div>
  );
};

export default AdminDashboard;
