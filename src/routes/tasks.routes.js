import { Router } from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} from '../controllers/tasks.controller';

export default Router()
  .get('/tasks', getTasks)
  .post('/tasks', createTask)
  .put('/tasks/:id', updateTask)
  .delete('/tasks/:id', deleteTask)
  .get('/tasks/:id', getTask);
