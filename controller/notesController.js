const Note = require('../models/noteModel');

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ userId: req.userId });
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const note = new Note({ ...req.body, userId: req.userId });
  await note.save();
  res.status(201).json(note);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: 'Note deleted' });
};
