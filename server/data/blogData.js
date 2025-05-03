// server/blogData.js

let blogs = [
  {
    _id: "1",
    title: "Understanding JavaScript Closures",
    content: "Closures are a powerful feature in JavaScript..."
  },
  {
    _id: "2",
    title: "A Guide to React Hooks",
    content: "Hooks were introduced in React 16.8 and allow functional components to manage state and side effects..."
  },
  {
    _id: "3",
    title: "Deploying Node.js Apps",
    content: "Learn how to deploy your Node.js applications on popular platforms like Heroku, Vercel, and Render..."
  }
];

// Simple unique ID generator
function generateId() {
  return Date.now().toString();
}

module.exports = { blogs, generateId };

