import React, { useEffect, useState } from 'react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch blogs');
        return res.json();
      })
      .then(data => {
        console.log('Fetched blogs:', data);
        setBlogs(data.blogs || []); // ✅ expects blogs inside an object
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="text-white p-6">
      <h2 className="text-center text-3xl font-bold mb-6">Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-center">No blogs found.</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-4 border border-white rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-300">{blog.content || "No content available."}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;
