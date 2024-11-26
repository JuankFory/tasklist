const { Task, TaskStatus, User } = require('../models');

const getTasks = async (req, res) => {
    const tasks = await Task.findAll({ include: ['creator', 'assignee', TaskStatus] });
    res.json(tasks);
};

const createTask = async (req, res) => {
    const { title, description, created_by, assigned_to, status_id } = req.body;
    const task = await Task.create({ title, description, created_by, assigned_to, status_id });
    res.json(task);
};

const updateTaskStatus = async (req, res) => {
    const { id, status_id } = req.body;
    const task = await Task.update({ status_id }, { where: { id } });
    res.json(task);
};

module.exports = { getTasks, createTask, updateTaskStatus };
