import { Router } from 'express';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjectTasks,
} from '../controllers/products.controller';

export default Router()
  .get('/projects', getProjects)
  .post('/projects', createProject)
  .put('/projects/:id', updateProject)
  .delete('/projects/:id', deleteProject)
  .get('/projects/:id', getProject)
  .get('/projects/:id/tasks', getProjectTasks);
