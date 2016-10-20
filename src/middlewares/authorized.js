export default function isAuthorized(req, res, next) {
  if (req.user) {
    next();
  }

  res.status(401).send('Unauthorized');
}
