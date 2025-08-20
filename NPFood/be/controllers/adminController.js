const Admin = require('../models/admin/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { hashPassword, comparePassword } = require('../utils/hash');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
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
