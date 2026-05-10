# Final ePortfolio - Derrick Ruffin - CIS 5740

## Overview
A full-stack MERN ePortfolio application built with React, Node.js, Express, and MongoDB. 
Deployed on Render and accessible via a public URL.

## Tech Stack
- **Frontend:** React, Vite, Axios
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas
- **Deployment:** Render

## Project Structure
final-eportfolio/
├── client/         # React frontend
├── server/         # Node/Express backend
├── docs/           # Deployment notes
├── scripts/        # Database seeding
├── .env.example    # Environment variable template
└── README.md

## Local Installation

### Backend
cd server
npm install
node server.js

Runs on http://localhost:5000

### Frontend
cd client
npm install
npm run dev

Runs on http://localhost:5173

## Environment Variables

### Server (.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173

### Client (.env)
VITE_API_BASE_URL=http://localhost:5000

## API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | /api/projects      | Fetch all projects           |
| POST   | /api/projects      | Create a new project         |
| PUT    | /api/projects/:id  | Update a project             |
| DELETE | /api/projects/:id  | Delete a project             |
| POST   | /api/contact       | Submit contact form          |

## Deployment
See docs/deployment-notes.md for full deployment instructions.

## Live URL
## Live URLs
- **Frontend:** https://final-eportfolio-client-f5qp.onrender.com
- **Backend:** https://final-eportfolio-backend-fwyp.onrender.com