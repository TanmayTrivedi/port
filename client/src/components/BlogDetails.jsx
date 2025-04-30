import React, { useEffect, useState } from 'react';

const BlogDetails = ({ blogId, setActiveSection }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!blogId) return;

    fetch(`/api/blogs/${blogId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Blog not found');
        }
        return res.json();
      })
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog');
        setLoading(false);
      });
  }, [blogId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141E30] to-[#243B55] text-white p-6">
      <button
        onClick={() => setActiveSection('blog')}
        className="text-sm text-blue-300 underline mb-4"
      >
        ← Back to Blogs
      </button>

      {loading ? (
        <p>Loading blog...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
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
