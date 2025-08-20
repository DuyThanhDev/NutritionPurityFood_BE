const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../utils/hash');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).json({ message: 'Invalid credentials' });
  const valid = await comparePassword(password, admin.password);
  if (!valid) return res.status(400).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ _id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
};

exports.create = async (req, res) => {
  const { username, password } = req.body;
  const hashed = await hashPassword(password);
  const admin = new Admin({ username, password: hashed });
  await admin.save();
  res.status(201).json({ message: 'Admin created' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const hashed = await hashPassword(password);
  await Admin.findByIdAndUpdate(id, { password: hashed });
  res.json({ message: 'Admin updated' });
};
