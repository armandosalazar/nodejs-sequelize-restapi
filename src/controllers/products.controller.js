import Project from '../models/Project';
import Task from '../models/Task';

export async function getProjects(_req, res) {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function createProject(req, res) {
  try {
    const { name, priority, description } = req.body;
    const project = await Project.create({ name, priority, description });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function updateProject(req, res) {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    await Project.update(
      {
        name,
        priority,
        description,
      },
      {
        where: { id },
      }
    );
    res.json(await Project.findByPk(id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function deleteProject(req, res) {
  try {
    await Project.destroy({
      where: { id: req.params.id },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getProject(req, res) {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getProjectTasks(req, res) {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({
      where: { project_id: id },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
