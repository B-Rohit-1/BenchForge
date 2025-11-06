import { Router } from 'express';
import { runInference } from '../controllers/models.js';

const router = Router();

router.post('/models/inference', runInference);

export default router;
