const request = require('supertest');
const express = require('express');
const cors = require('cors');

// Create a lightweight test app without MongoDB
const app = express();
app.use(cors());
app.use(express.json());

// Mock projects route
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'ePortfolio Website',
      category: 'Web Development',
      tools: ['React', 'Vite', 'CSS'],
      description: 'A personal ePortfolio built with React and Vite.'
    }
  ]);
});

// Mock contact route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  res.status(200).json({ success: true, message: 'Your message has been received!' });
});

// Tests
describe('GET /api/projects', () => {
  it('should return a list of projects', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('POST /api/contact', () => {
  it('should accept a valid contact form submission', async () => {
    const res = await request(app).post('/api/contact').send({
      name: 'Derrick Ruffin',
      email: 'derrick@email.com',
      message: 'This is a test message.'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it('should reject a submission with missing fields', async () => {
    const res = await request(app).post('/api/contact').send({
      name: 'Derrick Ruffin'
    });
    expect(res.statusCode).toBe(400);
  });
});