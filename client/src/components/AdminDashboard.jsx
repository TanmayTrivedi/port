import React, { useState } from 'react';
import AdminBlogPage from './AdminBlogPage';
import AdminProject from './AdminProject';

const AdminDashboard = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('blog');

  return (
    <div className="pt-20 bg-[#222831] ">
      <h1 className="text-full l font-bold mb-4 text-white">Admin Dashboard</h1>

      <div className="flex space-x-4 mb-6 bg-[#222831]">
        <button
          className={"px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"

          }
          onClick={() => setActiveTab('blog')}
        >
          Blog Admin
        </button>
        <button
          className={"px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"}
          onClick={() => setActiveTab('project')}
        >
          Project Admin
        </button>
        <button
          className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"
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
