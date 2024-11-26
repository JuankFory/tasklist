const { Comment } = require('../models');

// Controlador para obtener todos los comentarios de una tarea
const getCommentsByTaskId = async (req, res) => {
    try {
        const { taskId } = req.params;
        const comments = await Comment.findAll({ where: { task_id: taskId } });
        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los comentarios' });
    }
};

// Controlador para crear un nuevo comentario
const createComment = async (req, res) => {
    try {
        const { task_id, user_id, comment } = req.body;

        // Validar datos
        if (!task_id || !user_id || !comment) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        const newComment = await Comment.create({ task_id, user_id, comment });
        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el comentario' });
    }
};

module.exports = {
    getCommentsByTaskId,
    createComment,
};
