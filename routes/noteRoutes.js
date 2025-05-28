const express = require('express');
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notesController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.use(auth);

router.get('/all', getNotes);

router.post('/create', createNote);

router.put('/update/:id', updateNote);

router.delete('/delete/:id', deleteNote);

module.exports = router;
