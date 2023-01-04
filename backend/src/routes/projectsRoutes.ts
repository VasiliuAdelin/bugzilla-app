import * as express from 'express';
import { getBugs } from '../services/bugService';
import { postProject, getProjects } from '../services/projectService';

const router = express.Router();

router.get('/projects', getProjects);

router.post('/projects', postProject);

export default router;
