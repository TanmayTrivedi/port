import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust this path based on your project structure

const BlogSection = ({ setActiveSection, setSelectedBlogId }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'blogs'),
      (snapshot) => {
        const blogData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogData);
        setLoading(false);
      },
      (err) => {
        setError('Failed to load blogs');
        console.error(err);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Clean up the listener
  }, []);

  return (
    <div className="min-h-screen bg-[#222831] text-white p-6 pt-28">

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
              key={blog.id}
              className="p-4 border-[3px] border-[#80f0e9] bg-[#222831] hover:bg-[#80f0e9] hover:scale-105 hover:text-[#222831] transition-transform duration-300 rounded-xl cursor-pointer group"
              onClick={() => {
                setSelectedBlogId(blog.id);
                setActiveSection('blogDetails');
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#222831] group-hover:underline">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-[#222831]">
                Click to read more...
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;
