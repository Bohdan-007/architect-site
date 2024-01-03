const express = require('express');
const { getProjects, addProject } = require('../controllers/projectController');

const projectRouter = express.Router();


projectRouter.get('/', getProjects);
projectRouter.post('/', addProject);


module.exports = projectRouter;