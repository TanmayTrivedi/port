// src/utils/UploadProjects.js
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const sampleProjects = [
  {
    title: 'AI-Powered Portfolio',
    description: 'A personal portfolio enhanced with AI features for interactivity and user insights.',
    aiSummary: 'Automatically showcases dynamic content and smart summaries using OpenAI APIs.',
    tech: ['React', 'Tailwind', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Crime Data Analytics',
    description: 'Visualized crime statistics using Power BI and Python for LA city data.',
    aiSummary: 'Detects trends in crime data and provides interactive visual storytelling.',
    tech: ['Python', 'Power BI'],
    link: 'https://github.com/TanmayTrivedi/crime-report.git',
  },
  {
    title: 'Calculator-Using Python GUI',
    description: 'A simple GUI-based calculator built using Tkinter in Python.',
    aiSummary: 'Lightweight tool to perform basic arithmetic operations with a clean interface.',
    tech: ['Tkinter'],
    link: 'https://github.com/TanmayTrivedi/Project.git',
  },
  {
    title: 'Blood Donor App',
    description: 'Direct communication platform between donors and receivers for emergencies.',
    aiSummary: 'Streamlines emergency blood requests by connecting donors and receivers instantly.',
    tech: ['Pug', 'NodeJS', 'Mongoose'],
    link: 'https://github.com/TanmayTrivedi/BloodMate.git',
  },
  {
    title: 'Stylish Project Card',
    description: 'A clean and simple project card with distinct design elements and hover effects.',
    aiSummary: 'Focuses on UI/UX enhancements with smooth hover transitions.',
    tech: ['Custom CSS', 'Tailwind'],
    link: '#',
  },
];

export const uploadProjectsToFirebase = async () => {
  const projectsRef = collection(db, 'projects');

  for (const project of sampleProjects) {
    try {
      await addDoc(projectsRef, project);
      console.log(`✅ Uploaded: ${project.title}`);
    } catch (error) {
      console.error(`❌ Error uploading ${project.title}:`, error);
    }
  }

  alert('✅ All projects uploaded to Firebase!');
};
