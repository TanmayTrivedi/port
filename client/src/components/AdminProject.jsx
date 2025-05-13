import React from 'react';
import { uploadProjectsToFirebase } from '../utils/UploadProject'; // adjust path if needed

const AdminProjectPage = () => {
  return (
    <div className="bg-[#222831] min-h-screen">
      <h2 className="text-2xl text-[#80f0e9] font-bold mb-4">Admin Project Uploader</h2>
      <button
        onClick={uploadProjectsToFirebase}
        className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"
      >
        Upload Projects to Firebase
      </button>
    </div>
  );
};

export default AdminProjectPage;
