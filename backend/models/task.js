const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    assigned_to: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    assigned_at: {
        type: DataTypes.DATE,
    },
}, {
    timestamps: false,
    tableName: 'tasks',
});

module.exports = Task;
