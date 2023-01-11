import * as express from 'express';

const isProjectMember = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.user.role === 'admin') {
    return next();
  }

  return res.status(401).json({ message: 'Unauthorized' });
};
