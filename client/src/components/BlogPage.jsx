// components/BlogPage.jsx
import React, { useState } from 'react';
import BlogSection from './BlogSection';
import BlogDetails from './BlogDetails';

const BlogPage = ({ setActiveSection }) => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  return selectedBlogId ? (
    <BlogDetails blogId={selectedBlogId} setActiveSection={setActiveSection} />
  ) : (
    <BlogSection setActiveSection={setActiveSection} setSelectedBlogId={setSelectedBlogId} />
  );
};

export default BlogPage;
