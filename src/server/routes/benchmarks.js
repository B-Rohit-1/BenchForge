import { Router } from 'express';
import { createBenchmark, getBenchmarks } from '../controllers/benchmarks.js';

const router = Router();

router.get('/benchmarks', getBenchmarks);
router.post('/benchmarks', createBenchmark);

export default router;
