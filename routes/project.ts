import express from 'express';
const router = express.Router();

// Basic project routes
router.get('/', (req, res) => {
  res.send('Get all projects');
});

router.post('/create', (req, res) => {
  res.send('Create project route');
});

export default router; 