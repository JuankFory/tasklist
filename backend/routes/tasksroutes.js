const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTaskStatus } = require('../controllers/tasksController');

router.get('/', getTasks);
router.post('/', createTask);
router.put('/status', updateTaskStatus);

module.exports = router;
