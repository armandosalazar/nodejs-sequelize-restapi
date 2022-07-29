import express from 'express';
import morgan from 'morgan';
import projectsRoutes from './routes/projects.routes';
import tasksRoutes from './routes/tasks.routes';

export default express()
  .use(morgan('dev'))
  .use(express.json())
  .use(projectsRoutes)
  .use(tasksRoutes);
