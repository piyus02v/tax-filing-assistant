import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { query } from '../config/database';

const router = Router();

router.post('/submissions', authMiddleware, async (req, res) => {
  try {
    const { formType, assessmentYear, metadata } = req.body;
    const userId = (req as any).user.id;
    const result = await query(
      'INSERT INTO form_submissions (user_id, form_type, assessment_year, metadata) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, formType, assessmentYear, JSON.stringify(metadata)]
    );
    res.json({ success: true, data: result.rows[0] });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/submissions', authMiddleware, async (req, res) => {
  try {
    const userId = (req as any).user.id;
    const result = await query('SELECT * FROM form_submissions WHERE user_id = $1', [userId]);
    res.json({ success: true, data: result.rows });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
