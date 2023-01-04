import * as express from 'express';
import { getBugs, postBug, getBug } from '../services/bugService';

const router = express.Router();

router.post('/projects/:projectId/bugs', postBug);

router.get('/projects/:projectId/bugs', getBugs);

router.get('/projects/:projectId/bugs/:bugId', getBug);

export default router;
