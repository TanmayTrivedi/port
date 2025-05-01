import React, { useEffect, useState } from 'react';

const BlogSection = ({ setActiveSection, setSelectedBlogId }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
          setError("Invalid blog data format");
          return;
        }
        setBlogs(data);
      })
      .catch(err => {
        setError("Failed to load blogs");
        console.error(err);
      });
  }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-6">
      <h2 className="text-center text-3xl font-bold mb-6">Blogs</h2>
      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : blogs.length === 0 ? (
        <p className="text-center">No blogs found.</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-4 border border-white rounded-xl bg-[#1c1c1c] cursor-pointer hover:bg-[#393E46] transition-colors"
              onClick={() => {
                setSelectedBlogId(blog._id);
                setActiveSection('blogDetails');
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#80f0e9] hover:underline">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-300">Click to read more...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;
