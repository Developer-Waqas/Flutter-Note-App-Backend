const connectDB = require('../../config/db');
const { getNotes } = require('../../controllers/notesController');
const auth = require('../../middleware/authMiddleware');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });
  try {
    await connectDB();
    auth(req, res, async () => {
      await getNotes(req, res);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
