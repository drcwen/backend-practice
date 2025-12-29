
const express = require('express')
const router = express.Router()
const User = require('../models/myUser')
const { createUser, getAllUser, deleteUser, loginUser } = require('../controllers/userController')

// Create user
router.post('/create', createUser)

// Get all users
router.get('/all', getAllUser)

// Delete a user
router.delete('/:id', deleteUser)

//User login
router.post('/login', loginUser)

module.exports = router