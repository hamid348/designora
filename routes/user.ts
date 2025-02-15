import express from 'express';
const router = express.Router();

// Basic user routes
router.get('/profile', (req, res) => {
  res.send('User profile route');
});

router.put('/update', (req, res) => {
  res.send('Update user route');
});

export default router; 