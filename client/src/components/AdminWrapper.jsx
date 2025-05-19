// AdminWrapper.js
import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';

const AdminWrapper = () => {
  // You can manage local admin state here if needed
  const [activeSection, setActiveSection] = useState('admin');
  return <AdminDashboard setActiveSection={setActiveSection} />;
};

export default AdminWrapper;
