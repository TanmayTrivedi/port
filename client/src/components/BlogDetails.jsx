import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Make sure the path is correct

const BlogDetails = ({ blogId, setActiveSection }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('blogId from props/state:', blogId);
  }, []);

  useEffect(() => {
    if (!blogId) return;

    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      try {
        const docRef = doc(db, 'blogs', blogId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log('Fetched blog data:', docSnap.data());
          setBlog(docSnap.data());
        } else {
          setError('Blog not found.');
        }
      } catch (err) {
        console.error('Firestore error:', err.message);
        setError('Failed to load blog.');
      } finally {
        setLoading(false);
      }
    };

    console.log('Fetching blog with ID:', blogId);
    fetchBlog();
  }, [blogId]);

  return (
    <div className="min-h-screen bg-[#222831] text-white p-6 pt-28">
      <button
        onClick={() => setActiveSection('blog')}
        className="text-sm text-blue-300 underline mb-4"
      >
        ← Back to Blogs
      </button>

      {loading ? (
        <p>Loading blog...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : blog ? (
        <div className="max-w-3xl mx-auto bg-[#1c1c1c] p-6 rounded-xl">
          <h1 className="text-3xl font-bold text-[#80f0e9] mb-4">{blog.title}</h1>
          <p className="text-gray-300 whitespace-pre-line">{blog.content}</p>
        </div>
      ) : (
        <p>No blog found.</p>
      )}
    </div>
  );
};

export default BlogDetails;
