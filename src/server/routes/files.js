import { Router } from 'express';
import multer from 'multer';
import { getFiles, uploadFile } from '../controllers/files.js';

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/files', getFiles);
router.post('/files', upload.single('file'), uploadFile);

export default router;
