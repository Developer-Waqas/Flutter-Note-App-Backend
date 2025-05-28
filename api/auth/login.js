const connectDB = require('../../config/db');
const { login } = require('../../controllers/authController');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  try {
    await connectDB();
    await login(req, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
