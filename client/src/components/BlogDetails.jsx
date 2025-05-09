import React, { useEffect, useState } from 'react';

const BlogDetails = ({ blogId, setActiveSection }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
  console.log("blogId from props/state:", blogId);
}, []);


  useEffect(() => {
    if (!blogId) return;

    setLoading(true);
    setError(null);
console.log("Fetching blog with ID:", blogId);
   fetch(`/api/blogs/${blogId}`)
  .then(res => {
    console.log("Response status:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("Fetched blog data:", data);
    setBlog(data);
  })
  .catch(error => {
    console.error("Fetch error:", error);
    setError(error.message);
  })

      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch blog error:', err.message);
        setError(err.message);
        setLoading(false);
      });
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
