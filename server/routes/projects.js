const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');

// GET all projects
router.get('/', getProjects);

// POST create a new project
router.post('/', createProject);

// PUT update a project by ID
router.put('/:id', updateProject);

// DELETE a project by ID
router.delete('/:id', deleteProject);

module.exports = router;