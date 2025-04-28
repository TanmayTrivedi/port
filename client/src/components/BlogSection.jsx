import React, { useEffect, useState } from 'react';
import axios from 'axios'; // make sure you installed it: npm install axios

const BlogSection = ({ setActiveSection, setSelectedBlogId }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');

        setBlogs(response.data); // assuming backend returns array of blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen py-20 px-6 bg-[#222831] text-white flex justify-center items-center">
        <p>Loading Blogs...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-6 bg-[#222831] text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Blogs</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="p-6 border-[2px] border-[#80f0e9] rounded-lg hover:bg-[#393E46] hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => {
              setSelectedBlogId(blog._id);
              setActiveSection('blogDetails');
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-400">Read more →</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
