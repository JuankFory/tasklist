const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const TaskStatus = sequelize.define('taskstatus', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: false,
    tableName: 'task_statuses',
});

module.exports = TaskStatus;
