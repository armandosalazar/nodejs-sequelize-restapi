import Task from '../models/Task';

export async function getTasks(_req, res) {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createTask(req, res) {
  try {
    const { name, done, project_id } = req.body;
    const task = await Task.create({ name, done, project_id });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateTask(req, res) {
  try {
    const { name, done, project_id } = req.body;
    const { id } = req.params;
    const task = await Task.findByPk(id);
    task.name = name;
    task.done = done;
    task.project_id = project_id;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteTask(req, res) {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await task.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getTask(req, res) {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id },
      attributes: ['name', 'done'],
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
