
const express = require('express')
const router = express.Router()
const User = require('../models/myUser')
const Notes = require('../models/myNotes')
const { createNote, getAllNote, deleteNote, updateNote } = require('../controllers/notesController')

//Create new note
router.post('/create', createNote)

router.get('/all', getAllNote)

router.delete('/:id', deleteNote)

// Update a note
router.put('/:id', updateNote)

module.exports = router