import React, { useState } from 'react';
import AdminBlogPage from './AdminBlogPage';
import AdminProject from './AdminProject';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const navigate = useNavigate();

  // Common button classes
  const baseBtn =
    'px-6 py-2 border-[3px] border-[#80f0e9] font-semibold rounded-full shadow transition hover:scale-105 transition-transform duration-300';

  return (
    <div className="min-h-screen pt-20 bg-[#222831]">
      <h1 className="text-3xl font-bold mb-4 text-white text-center">Admin Dashboard</h1>

      <div className="flex space-x-4 mb-6 bg-[#222831] justify-center">
        {/* Blog Admin Tab */}
        <button
          className={
            baseBtn +
            ' ' +
            (activeTab === 'blog'
              ? 'bg-[#80f0e9] text-[#222831]'
              : 'bg-[#222831] text-white hover:bg-[#80f0e9] hover:text-[#222831]')
          }
          onClick={() => setActiveTab('blog')}
        >
          Blog Admin
        </button>

        {/* Project Admin Tab */}
        <button
          className={
            baseBtn +
            ' ' +
            (activeTab === 'project'
              ? 'bg-[#80f0e9] text-[#222831]'
              : 'bg-[#222831] text-white hover:bg-[#80f0e9] hover:text-[#222831]')
          }
          onClick={() => setActiveTab('project')}
        >
          Project Admin
        </button>

        {/* Exit Admin Button */}
        <button
          className={
            baseBtn +
            ' bg-red-600 text-white hover:bg-red-700 hover:text-white ml-auto'
          }
          onClick={() => navigate('/')}
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
