
const Notes = require('../models/myNotes')

const createNote = async (req, res) => {
    try {
        const newNote = await Notes.create(req.body);
        res.json(newNote);
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

const getAllNote = async (req, res) => {
    try {
        const getNotes = await Notes.find()
            .populate('user', 'firstName lastName username')
        res.json(getNotes)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteNote = async (req, res) => {
    try {
        const deleteNote = await Notes.findByIdAndDelete(req.params.id);
        res.json(deleteNote);
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

const updateNote = async (req, res) => {
    try {
        const updateNote = await Notes.findById(req.params.id);
        
        if(!updateNote) {
            res.status(404).json({ message: 'Note not found '});
        }

        updateNote.title = req.body.title || updateNote.title
        updateNote.content = req.body.content || updateNote.content

        const updatedNote = await updateNote.save()

        //populate user info
        await updatedNote.populate('user', 'firstName lastName username')

        res.json(updatedNote)
    } catch(err) {
        res.status(400).json({ error: err.message})
    }
}
module.exports = { createNote, getAllNote, deleteNote, updateNote }