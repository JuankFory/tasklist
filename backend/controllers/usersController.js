const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validar datos
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

module.exports = {
    getAllUsers,
    createUser,
};
