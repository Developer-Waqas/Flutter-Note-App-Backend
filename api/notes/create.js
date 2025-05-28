const connectDB = require('../../config/db');
const { createNote } = require('../../controllers/notesController');
const auth = require('../../middleware/authMiddleware');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  try {
    await connectDB();
    auth(req, res, async () => {
      await createNote(req, res);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
