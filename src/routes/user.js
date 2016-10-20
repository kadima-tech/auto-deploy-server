import { Router as xpsRouter } from 'express';
import { authorized } from '../middlewares';

// Get the router
const router = xpsRouter();

router.put('/:id',
  authorized,
  (req, res) => {
    // Update user credentials, with the exception of the api key
    res.json({ message: 'User not updated' });
  }
);

export default router;
