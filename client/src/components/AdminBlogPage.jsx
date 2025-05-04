import React, { useState, useEffect } from 'react';

const AdminBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => {
        console.error(err);
        setError('Failed to fetch blogs');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
      .then(res => res.json())
      .then(newBlog => {
        setBlogs([...blogs, newBlog]);
        setTitle('');
        setContent('');
      })
      .catch(err => {
        console.error(err);
        setError('Failed to create blog');
      });
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Blog Panel</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          required
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Blog Content"
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-[#80f0e9] text-[#1f1f1f] font-bold px-4 py-2 rounded hover:bg-[#4dd0c3]"
        >
          Add Blog
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="space-y-4">
        {blogs.map(blog => (
          <div key={blog._id} className="p-4 border border-gray-700 rounded bg-[#2c2c2c]">
            <h3 className="text-xl font-semibold text-[#80f0e9]">{blog.title}</h3>
            <p className="text-gray-300 mt-2 whitespace-pre-line">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogPage;
