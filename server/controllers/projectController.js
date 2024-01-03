const Project = require('../models/project');

const INTERNAL_SERVER_ERROR = { error: 'Internal Server Error' };
const POST_NOT_FOUND_ERROR = { error: 'Project not found' };

// Middleware for error handling
const handleErrors = (res, error) => {
  console.error(error);
  res.status(500).send(INTERNAL_SERVER_ERROR);
};


// GET projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.send(projects);
  }
  catch (error) {
    handleErrors(res, error);
  }
};

// ADD project
const addProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).send(newProject);
  }
  catch (error) {
    handleErrors(res, error);
  }
};


module.exports = {
  getProjects,
  addProject,
};