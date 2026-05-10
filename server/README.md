The frontend will run on http://localhost:5173

## Routes and Endpoints

| Method | Endpoint            | Description                        |
|--------|--------------------|------------------------------------|
| GET    | /                  | Welcome message                    |
| GET    | /api/projects      | Fetch all projects from MongoDB    |
| POST   | /api/projects      | Create a new project               |
| PUT    | /api/projects/:id  | Update a project by ID             |
| DELETE | /api/projects/:id  | Delete a project by ID             |
| POST   | /api/contact       | Accepts and validates contact form |

### POST /api/contact - Expected Input
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to connect!"
}
```

### POST /api/projects - Expected Input
```json
{
  "title": "My Project",
  "category": "Web Development",
  "tools": ["React", "Node.js"],
  "description": "A description of my project.",
  "image": ""
}
```

## MongoDB & Mongoose
- Database hosted on MongoDB Atlas
- Mongoose schema defined in `models/Project.js`
- Connection configured in `config/db.js`
- URI stored securely in `.env`

## Frontend Integration
- React frontend (`eportfolio-ruffin-derrick-week4`) connects to this backend via Axios
- Projects page fetches live data from `/api/projects`
- Contact page submits form data to `/api/contact`
- Both must be running simultaneously for full functionality

## Dependencies
- express
- mongoose
- cors
- multer
- express-validator
- dotenv