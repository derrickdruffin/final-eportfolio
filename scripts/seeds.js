require('dotenv').config({ path: '../server/.env' });
const mongoose = require('mongoose');
const Project = require('../server/models/Project');

const projects = [
  {
    title: 'ePortfolio Website',
    category: 'Web Development',
    tools: ['React', 'Vite', 'CSS'],
    description: 'A personal ePortfolio built with React and Vite showcasing my skills and projects.',
    image: ''
  },
  {
    title: 'Volume Calculator',
    category: 'Web Development',
    tools: ['HTML', 'CSS', 'JavaScript'],
    description: 'A web app that calculates the volume and surface area of a rectangular parallelepiped.',
    image: ''
  },
  {
    title: 'Express Backend Server',
    category: 'Backend Development',
    tools: ['Node.js', 'Express', 'JavaScript'],
    description: 'A Node.js/Express backend server with REST API endpoints and form validation.',
    image: ''
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err.message);
    process.exit(1);
  }
};

seedDB();