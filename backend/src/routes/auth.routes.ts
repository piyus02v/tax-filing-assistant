import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../config/database';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await query(
      'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email',
      [email, hashedPassword, fullName]
    );
    const token = jwt.sign({ id: result.rows[0].id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
    res.json({ success: true, data: { token, user: result.rows[0] } });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
    res.json({ success: true, data: { token, user: { id: user.id, email: user.email } } });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
