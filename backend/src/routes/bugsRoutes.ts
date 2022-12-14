
import * as express from 'express';
import {getBugs, postBug} from '../services/bugService';

const router = express.Router();

router.get('/bugs', getBugs);

router.post('/bugs', postBug);

// router.put('/:id', updateCatFact);

// router.delete('/:id', deleteCatFact);

export default router;