const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Ruta para obtener comentarios de una tarea
router.get('/:taskId', commentsController.getCommentsByTaskId);

// Ruta para crear un nuevo comentario
router.post('/', commentsController.createComment);

module.exports = router;
