import React from 'react';
import { uploadProjectsToFirebase } from '../utils/UploadProject'; // adjust path if needed

const AdminProjectPage = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Admin Project Uploader</h2>
      <button
        onClick={uploadProjectsToFirebase}
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
      >
        Upload Projects to Firebase
      </button>
    </div>
  );
};

export default AdminProjectPage;
