import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore';

const AdminBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsData);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch blogs');
      }
    };

    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      if (editId) {
        const blogRef = doc(db, 'blogs', editId);
        await updateDoc(blogRef, {
          title,
          content,
          updatedAt: serverTimestamp()
        });

        setBlogs(blogs.map(blog => blog.id === editId ? { ...blog, title, content } : blog));
        setEditId(null);
      } else {
        const docRef = await addDoc(collection(db, 'blogs'), {
          title,
          content,
          createdAt: serverTimestamp()
        });
        setBlogs([...blogs, { id: docRef.id, title, content }]);
      }

      setTitle('');
      setContent('');
    } catch (err) {
      console.error(err);
      setError('Failed to save blog');
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setEditId(blog.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (err) {
      console.error(err);
      setError('Failed to delete blog');
    }
  };

  return (
    <div className="min-h-screen  bg-[#222831] text-white p-6 ">
      <h2 className="text-2xl font-bold mb-4">Admin Blog Panel</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full p-2 rounded bg-gray-800 text-white border-[3px] border-[#80f0e9]"
          required
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Blog Content"
          className="w-full p-2 rounded bg-gray-800 text-white border-[3px] border-[#80f0e9]"
          rows={5}
          required
        />
        <button
          type="submit"
          className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"
        >
          {editId ? 'Update Blog' : 'Add Blog'}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="space-y-4">
        {blogs.map(blog => (
          <div key={blog.id} className="p-4 border-[3px] border-[#80f0e9] rounded bg-[#222831]">
            <h3 className="text-xl font-semibold text-[#80f0e9]">{blog.title}</h3>
            <p className="text-gray-300 mt-2 whitespace-pre-line">{blog.content}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => handleEdit(blog)}
                className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="px-6 py-2 border-[3px] border-[#80f0e9] bg-[#222831] text-white font-semibold rounded-full shadow hover:bg-[#80f0e9] hover:text-[#222831] transition hover:scale-105 transition-transform duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogPage;
