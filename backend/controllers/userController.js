
const myUser = require('../models/myUser')

const createUser = async (req, res) => {
    try {
        const createUser = await myUser.create(req.body);
        res.json(createUser);
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

const getAllUser = async (req, res) => {
    try {
        const getAllUser = await myUser.find();
        res.json(getAllUser);
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleteUser = await myUser.findByIdAndDelete(req.params.id);
        res.json(deleteUser);
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { createUser, getAllUser, deleteUser }