import { Router as xpsRouter } from 'express';
import passport from 'passport';

// Get the router
const router = xpsRouter();

router.post('/password',
  passport.authenticate('local'),
  (req, res) => {
    console.log(req);
    res.json({ Hello: 'World' });
  }
);

router.post('/token',
  passport.authenticate('localapikey'),
  (req, res) => {
    res.json({ Hello: 'World' });
  }
);

export default router;
