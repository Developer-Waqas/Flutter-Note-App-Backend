const express = require('express');
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notesController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// All routes require authentication
router.use(auth);

// GET /api/notes/all - Get all notes for the user
router.get('/all', getNotes);

// POST /api/notes/create - Create a new note
router.post('/create', createNote);

// PUT /api/notes/update/:id - Update a note
router.put('/update/:id', updateNote);

// DELETE /api/notes/delete/:id - Delete a note
router.delete('/delete/:id', deleteNote);

module.exports = router;
