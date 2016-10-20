import { Router as xpsRouter } from 'express';
import { authorized } from '../middlewares';
import { deploy } from '../controllers';

// Get the router
const router = xpsRouter();

router.post('/',
  authorized,
  (req, res) => {
    // Deploy to the server
    deploy();
    res.json({ message: 'Deployment not implemented' });
  }
);

export default router;
