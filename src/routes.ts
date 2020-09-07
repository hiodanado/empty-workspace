import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('gaby te amo muito muito muito');
});

export default router;
