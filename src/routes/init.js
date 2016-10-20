import { Router as xpsRouter } from 'express';
import { authorized } from '../middlewares';
import { init } from '../controllers';

// Get the router
const router = xpsRouter();

router.post('/',
  authorized,
  (req, res) => {
    init();
    res.json({ message: 'Initialization not implemented' });
  }
);

export default router;
