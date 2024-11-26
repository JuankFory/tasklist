const sequelize = require('../config');
const User = require('./user');
const Task = require('./task');
const Comment = require('./comment');
const TaskStatus = require('./taskstatus');

Task.belongsTo(User, { as: 'creator', foreignKey: 'created_by' });
Task.belongsTo(User, { as: 'assignee', foreignKey: 'assigned_to' });
Task.belongsTo(TaskStatus, { foreignKey: 'status_id' });
Comment.belongsTo(Task, { foreignKey: 'task_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

sequelize.sync({ alter: true }); 
module.exports = { User, Task, Comment, TaskStatus, sequelize };
