# Deployment Notes

## Platform
This project is deployed using Render for both the frontend and backend.

## Backend Deployment (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the root directory to `server`
4. Set the build command to: `npm install`
5. Set the start command to: `node server.js`
6. Add the following environment variables:
   - `MONGO_URI` — your MongoDB Atlas connection string
   - `PORT` — 5000
   - `CLIENT_URL` — your deployed frontend URL

## Frontend Deployment (Render)
1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Set the root directory to `client`
4. Set the build command to: `npm install && npm run build`
5. Set the publish directory to: `dist`
6. Add the following environment variable:
   - `VITE_API_BASE_URL` — your deployed backend URL

## Environment Variables
Never commit your `.env` file to GitHub. Use the `.env.example` 
file as a template and configure environment variables directly 
on Render's dashboard.

## Local Development
See the root README.md for local setup instructions.