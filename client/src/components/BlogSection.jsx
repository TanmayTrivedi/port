import React from 'react';

const blogContent = {
  1: { title: "How I Built My Portfolio" },
  2: { title: "Learning React the Fun Way" },
  3: { title: "Integrating AI in Frontend Projects" },
  4: { title: "Fixing UI Readability Issues in Hover States" },
};

const BlogSection = ({ setActiveSection, setSelectedBlogId }) => {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#222831] text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Blogs</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {Object.entries(blogContent).map(([id, blog]) => (
          <div
            key={id}
            className="p-6 border-[2px] border-[#80f0e9] rounded-lg hover:bg-[#393E46] hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => {
              setSelectedBlogId(id);
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
