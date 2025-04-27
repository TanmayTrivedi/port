import React from 'react';

const blogContent = {
  1: {
    title: "How I Built My Portfolio",
    content: "I used React.js, TailwindCSS, and added AI enhancements. It took me about a month of learning and experimenting. Challenges included making the layout responsive and designing a dark mode friendly UI. I also worked on making the hover effects visually consistent..."
  },
  2: {
    title: "Learning React the Fun Way",
    content: "I focused on small projects instead of just tutorials. Building real-world projects like a todo app, portfolio, and a blog page helped me learn faster. Mistakes are the best teachers!"
  },
  3: {
    title: "Integrating AI in Frontend Projects",
    content: "You can integrate AI easily using APIs like OpenAI, Replicate, or HuggingFace. It's just a matter of calling APIs smartly inside your React code. Start small, like an AI image generator or chatbot."
  },
  4: {
    title: "Fixing UI Readability Issues in Hover States",
    content: `
Issue Faced:
While designing the Projects and Blogs section, I noticed that text became unreadable when users hovered over the cards.
The light text color combined with the light hover background caused poor visibility and bad user experience, especially in dark mode.

Solution Implemented:
To fix this, I changed the hover background to a darker shade (#393E46) instead of a bright color. 
I also adjusted the text colors during hover to maintain high contrast and ensure smooth transitions using TailwindCSS.

Technical Fix:
- Used bg-[#393E46] for hover backgrounds inside cards.
- Ensured text remains darker (like text-gray-300) for readability.
- Applied hover:text-[#222831] only on specific elements if necessary.
- Added transition-colors for smooth color changes.

Final Impact:
Now, Projects and Blog sections are fully readable and consistent across the portfolio, providing better UX, accessibility, and a polished design!
    `
  }
};

const BlogDetails = ({ blogId, setActiveSection }) => {
  const blog = blogContent[blogId];

  if (!blog) {
    return <p className="text-center text-white">Blog not found.</p>;
  }

  return (
    <section className="min-h-screen py-20 px-6 bg-[#222831] text-white animate-fadeIn">
      <button 
        onClick={() => setActiveSection('blog')}
        className="mb-8 text-[#80f0e9] hover:underline"
      >
        ← Back to Blogs
      </button>

      <h2 className="text-4xl font-bold mb-6">{blog.title}</h2>
      <pre className="text-gray-300 leading-relaxed max-w-3xl whitespace-pre-wrap">
        {blog.content}
      </pre>
    </section>
  );
};

export default BlogDetails;
